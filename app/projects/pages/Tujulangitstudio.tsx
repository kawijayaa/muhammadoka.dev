import Image from "next/image";
import { SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiVercel } from "react-icons/si";

export default function Tujulangitstudio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center md:items-end">
        <p>
          A website for Tuju Langit Studio, a video production house based in Jakarta, Indonesia.
        </p>
        <a href="https://tujulangitstudio.com/" className="flex flex-col justify-center hover:underline hover:text-cyan-500" target="_blank">
          <div className="bg-stone-700 w-full flex justify-center text-center py-2 rounded-t-lg text-xs md:text-sm">
            <div className="bg-stone-800 w-2/3 min-w-max px-8 py-1 rounded-full">
              https://tujulangitstudio.com/
            </div>
          </div>
          <Image
            src="/tujulangitstudio.png"
            alt="Kepo 2023"
            width={500}
            height={500}
            className="rounded-b-lg"
          />
        </a>
        <div className="flex items-center gap-4">
          <p>built with</p>
          <div className="flex items-center gap-2">
            <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" />
            <SiReact className="w-6 h-6 md:w-8 md:h-8" />
            <SiTypescript className="w-6 h-6 md:w-8 md:h-8" />
            <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" />
            <SiVercel className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
