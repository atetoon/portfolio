
import InteractiveProfile from "@/components/interactive-profile";
import { VerseText } from "@/components/verse-text";

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

      {/* Profile and introduction */}
      <div className="mb-5 ml-3 flex items-center gap-3">
        <InteractiveProfile />

        <div className="flex flex-col gap-2">
          <VerseText
            text="Dhruv Pandey"
            seed={1610}
            autoplay
            idle
            tone="light"
            className="font-press-start text-[13px] font-normal tracking-tight text-[#28231f] dark:text-[#eeeae1]"
          />

          <p className="font-sans text-[14px] font-bold tracking-wide text-[#49443e] dark:text-[#c4c0b8]">
            I make web apps.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="space-y-4 font-sans text-[13px] leading-[1.8] text-[#49443e] dark:text-[#c0baae]">
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
            className="font-medium text-[#211d19] underline decoration-[#a69b8e] underline-offset-2 dark:text-[#eeeae1]"
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
            className="font-medium text-[#211d19] underline decoration-[#a69b8e] underline-offset-2 dark:text-[#eeeae1]"
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
      <footer className="mt-[26px] font-sans text-[12px] text-[#625b52] dark:text-[#aaa397]">
        <a
          href="https://github.com/atetoon"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-[#a69b8e] underline-offset-2 hover:text-[#211d19] dark:hover:text-white"
        >
          GitHub
        </a>
        {", "}
        <a
          href="https://linkedin.com/in/iamdhruvpandey"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-[#a69b8e] underline-offset-2 hover:text-[#211d19] dark:hover:text-white"
        >
          LinkedIn
        </a>
        {", "}
        <a
          href="mailto:i.am.dhruvpandey@gmail.com"
          className="underline decoration-[#a69b8e] underline-offset-2 hover:text-[#211d19] dark:hover:text-white"
        >
          Email
        </a>
      </footer>
    </>
  );
}
