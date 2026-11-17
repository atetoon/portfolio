import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/site-nav";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Dhruv Pandey",
  description:
    "Dhruv Pandey — computer science undergraduate and full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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