const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let clickBuffer = null;

fetch("sounds/bubble-click.wav")
  .then(res => res.arrayBuffer())
  .then(data => audioCtx.decodeAudioData(data))
  .then(buffer => { clickBuffer = buffer; })
  .catch(err => console.log("Click sound failed to load:", err));

function playClickSound() {
  if (!clickBuffer) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const source = audioCtx.createBufferSource();
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.2;
  source.buffer = clickBuffer;
  source.connect(gainNode).connect(audioCtx.destination);
  source.start(0);
}

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const lastfmNowPlaying = document.getElementById('lastfmNowPlaying');

const LASTFM_USER = 'atetoon';
const LASTFM_API_KEY = 'e073e27ac38120abdae2d9422400afc3';

if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = 'dark';
} else {
  themeToggle.textContent = 'light';
}

themeToggle.addEventListener('click', (e) => {
  playClickSound();
  const goingLight = !document.body.classList.contains('light');

  const applyTheme = () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = goingLight ? 'dark' : 'light';
    localStorage.setItem('theme', goingLight ? 'light' : 'dark');
  };

  if (!document.startViewTransition) {
    applyTheme();
    return;
  }

  const rect = themeToggle.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const transition = document.startViewTransition(() => applyTheme());

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  });
});

async function loadLastFmRecentTrack() {
  if (!lastfmNowPlaying) return;

  try {
    const url = new URL('https://ws.audioscrobbler.com/2.0/');
    url.searchParams.set('method', 'user.getrecenttracks');
    url.searchParams.set('user', LASTFM_USER);
    url.searchParams.set('api_key', LASTFM_API_KEY);
    url.searchParams.set('format', 'json');
    url.searchParams.set('limit', '1');

    const response = await fetch(url.toString());

    if (!response.ok) throw new Error('Last.fm request failed');

    const data = await response.json();
    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      lastfmNowPlaying.textContent = 'recently played on last.fm';
      return;
    }

    const title = track.name || 'Unknown track';
    const artist = track.artist?.['#text'] || 'Unknown artist';
    const isPlaying = track['@attr']?.nowplaying === 'true';
    lastfmNowPlaying.textContent = isPlaying
      ? `listening now · ${title} — ${artist}`
      : `last played · ${title} — ${artist}`;
  } catch (error) {
    lastfmNowPlaying.textContent = 'recently played on last.fm';
  }
}

loadLastFmRecentTrack();