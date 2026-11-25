
"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-20 mb-[34px] w-full py-4 font-['Hanken_Grotesk'] font-medium backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#929292] dark:text-[#999]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#929292] dark:text-[#999]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
