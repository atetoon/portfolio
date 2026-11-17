
export default function HomePage() {
  return (
    <>
      {/* Banner */}
      <div className="relative mb-6 w-full max-w-[670px]">
        <img
          src="/images/banner.gif"
          alt="A little animated glimpse into my world"
          className="h-auto w-full rounded-xl object-contain"
        />
      </div>

      {/* Introduction */}
      <h1 className="mb-3 font-[family-name:var(--font-editorial)] text-[25px] font-normal tracking-tight">
        Dhruv Pandey
      </h1>

      <div className="space-y-4 text-[13px] leading-[1.7] text-[#625e55] dark:text-[#c0baae]">
        <p>
          I&apos;m a computer science undergraduate and full-stack developer.
          I enjoy building useful things for the web, working across the
          frontend and backend, and learning how software systems fit together.
        </p>

        <p>
          My work includes projects like{" "}
          <a
            href="https://github.com/atetoon/askami"
            target="_blank"
            rel="noreferrer"
            className="text-[#28231f] underline decoration-[#9b938a] underline-offset-2 dark:text-[#eeeae1]"
          >
            AskAMI
          </a>
          , along with web applications and backend projects using JavaScript,
          React, Node.js, Express and databases. You can find more of my work
          on{" "}
          <a
            href="https://github.com/atetoon"
            target="_blank"
            rel="noreferrer"
            className="text-[#28231f] underline decoration-[#9b938a] underline-offset-2 dark:text-[#eeeae1]"
          >
            GitHub
          </a>.
        </p>

        <p>
          Outside programming, I enjoy photography, mythology, reading, and
          exploring ideas about space and the cosmos.
        </p>
      </div>

      {/* Social links */}
      <footer className="mt-[26px] text-[12px] text-[#817970] dark:text-[#aaa397]">
        <a href="https://github.com/atetoon" target="_blank" rel="noreferrer"
          className="underline decoration-[#9b938a] underline-offset-2">
          GitHub
        </a>
        {", "}
        <a href="https://linkedin.com/in/iamdhruvpandey" target="_blank" rel="noreferrer"
          className="underline decoration-[#9b938a] underline-offset-2">
          LinkedIn
        </a>
        {", "}
        <a href="mailto:i.am.dhruvpandey@gmail.com"
          className="underline decoration-[#9b938a] underline-offset-2">
          Email
        </a>
      </footer>
    </>
  );
}
