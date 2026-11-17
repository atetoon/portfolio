
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col justify-center">
      <p className="mb-3 text-xs uppercase tracking-widest text-[#817970] dark:text-[#aaa397]">
        404 — Page not found
      </p>

      <h1 className="mb-4 font-[family-name:var(--font-editorial)] text-3xl font-normal">
        Lost your way?
      </h1>

      <p className="text-sm text-[#625e55] dark:text-[#c0baae]">
        This page doesn&apos;t exist.{" "}
        <Link
          href="/"
          className="underline decoration-[#9b938a] underline-offset-4 hover:text-black dark:hover:text-white"
        >
          Back home
        </Link>
        .
      </p>
    </section>
  );
}
