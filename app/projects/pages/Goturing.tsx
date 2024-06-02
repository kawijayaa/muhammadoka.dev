import { SiGithub } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function Goturing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center md:items-end">
        <p>
          A single-tape Turing machine implementation interface written in Go.
        </p>
        <div className="flex items-center gap-2">
          <p>built with</p>
          <FaGolang className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <a href="https://github.com/kawijayaa/goturing" className="flex items-center gap-2 hover:underline hover:text-cyan-500">
          <p>repo link</p>
          <SiGithub className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </a>
      </div>
    </div>
  );
}
