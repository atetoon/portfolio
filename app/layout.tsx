
import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/site-nav";
import ThemeProvider from "@/components/theme-provider";
import {
  DM_Sans,
  Geist_Mono,
  Instrument_Serif,
  Press_Start_2P,
} from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhruv Pandey",
  description:
    "Dhruv Pandey — computer science undergraduate and full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${pressStart2P.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-[#28231f] antialiased dark:bg-[#121010] dark:text-[#eeeae1]">
        <ThemeProvider>
          <main className="mx-auto w-[calc(100%-40px)] max-w-[670px] py-[14px]">
            <SiteNav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
