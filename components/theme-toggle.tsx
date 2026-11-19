
"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "scribbles-icons";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setMounted(true);

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  function toggleTheme() {
    const audio = audioRef.current;

    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex size-11 shrink-0 items-center justify-center rounded-xl"
      >
        <span className="size-[28.8px] rounded-lg bg-black/5 dark:bg-white/10" />
      </button>
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
        title={`Switch to ${dark ? "light" : "dark"} mode`}
        className="flex size-11 shrink-0 items-center justify-center rounded-xl text-[#929292] outline-offset-2 transition-colors duration-300 hover:text-[#28231f] focus-visible:outline-2 dark:text-[#999] dark:hover:text-white"
      >
        <span className="relative flex size-[28.8px] items-center justify-center overflow-hidden rounded-lg bg-black/5 dark:bg-white/10">
          <Sun
            size={14.4}
            weight="fill"
            className={`absolute transition-transform duration-300 ${
              dark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />

          <Moon
            size={14.4}
            weight="fill"
            className={`absolute transition-transform duration-300 ${
              dark ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          />
        </span>
      </button>

      <audio ref={audioRef} src="/sounds/switch.mp3" preload="none" />
    </>
  );
}
