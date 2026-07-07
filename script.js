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

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeToggle.textContent = isLight ? 'dark' : 'light';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
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
