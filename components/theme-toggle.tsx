
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Sun from "@/components/icons/sun";
import Moon from "@/components/icons/moon";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dark = resolvedTheme === "dark";

  function toggleTheme() {
    const audio = new Audio("/sounds/bubble-click.wav");
    audio.volume = 0.04;
    audio.play().catch(() => {});

    setTheme(dark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="flex size-8 items-center justify-center rounded-md text-[#28231f] transition-colors duration-200 hover:bg-black/5 hover:text-black dark:text-[#eeeae1] dark:hover:bg-white/10 dark:hover:text-white"
    >
      {dark ? (
        <Moon className="size-[18px]" />
      ) : (
        <Sun className="size-[18px]" />
      )}
    </button>
  );
}
