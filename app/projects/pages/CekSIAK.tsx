import { SiRust, SiGithub } from "react-icons/si";

export default function CekSIAK() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center md:items-end">
        <p>
          Discord bot that notifies you if scores have been published on SIAK (UI&apos;s student portal).
        </p>
        <div className="flex items-center gap-2">
          <p>built with</p>
          <SiRust className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <a href="https://github.com/kawijayaa/CekSIAK" className="flex items-center gap-2 hover:underline hover:text-cyan-500" target="_blank">
          <p>repo link</p>
          <SiGithub className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </a>
      </div>
    </div>
  );
}
