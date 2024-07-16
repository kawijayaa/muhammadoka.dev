import Image from 'next/image';
import { SiGithub, SiTailwindcss } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function Pintas() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center md:items-end">
        <p>A URL shortener website built with Gin, GORM and Tailwind CSS.</p>
        <div className="flex flex-col justify-center">
          <div className="bg-stone-700 w-full flex flex-col justify-center text-center p-2 rounded-lg text-xs md:text-sm gap-2">
            <span>localhost:8080</span>
            <Image
              src="/pintas.png"
              alt="Pintas"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>built with</p>
          <div className="flex items-center gap-2">
            <FaGolang className="w-6 h-6 md:w-8 md:h-8" />
            <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
        <a href="https://github.com/kawijayaa/pintas" className="flex items-center gap-2 hover:underline hover:text-cyan-500" target="_blank">
          <p>repo link</p>
          <SiGithub className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </a>
      </div>
    </div>
  );
}
