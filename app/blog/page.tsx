
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Dhruv Pandey",
  description: "Notes, ideas and things I'm learning.",
};

export default function BlogPage() {
  return (
    <section className="min-h-[60vh]">
      <h1 className="mb-4 font-[family-name:var(--font-editorial)] text-3xl font-normal tracking-tight">
        Blog
      </h1>

      <p className="text-[13px] leading-[1.7] text-[#625e55] dark:text-[#c0baae]">
        Notes, ideas and things I&apos;m learning. Posts will find their way here.
      </p>
    </section>
  );
}
