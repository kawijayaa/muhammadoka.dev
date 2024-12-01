import Reveal from "../animation/Reveal";
import Marquee from "react-fast-marquee";
import { FaPython, FaJava, FaRust, FaReact, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6"
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript, SiDjango, SiSpring, SiTailwindcss, SiNeovim, SiWindowsterminal, SiPostgresql, SiGooglecloud, SiZsh, SiTmux, SiWireshark, SiBurpsuite } from "react-icons/si";

export default function Stack() {
  return (
    <Reveal
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      amount={0.3}
      initial="hidden"
      reveal="visible"
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-center items-center px-4 py-8"
      useView
    >
      <p className="text-5xl md:text-6xl font-bold mb-8">Tech Stack</p>
      <div className="flex flex-col w-5/6 justify-center items-center gap-8 sm:gap-12">
        <p className="text-xl md:text-4xl">Languages &amp; Frameworks</p>
        <Marquee
          speed={60}
        >
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaPython className="text-5xl sm:text-7xl" title="Python" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiDjango className="text-5xl sm:text-7xl" title="Django" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiTypescript className="text-5xl sm:text-7xl" title="Typescript" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaReact className="text-5xl sm:text-7xl" title="React" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <RiNextjsLine className="text-5xl sm:text-7xl" title="Next.js" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiTailwindcss className="text-5xl sm:text-7xl" title="Tailwind CSS" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaJava className="text-5xl sm:text-7xl" title="Java" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiSpring className="text-5xl sm:text-7xl" title="Spring" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaGolang className="text-5xl sm:text-7xl" title="Go" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaRust className="text-5xl sm:text-7xl" title="Rust" />
          </div>
        </Marquee>
        <p className="text-2xl md:text-4xl">Tools</p>
        <Marquee
          speed={60}
          direction="right"
        >
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiNeovim className="text-5xl sm:text-7xl" title="Neovim" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiTmux className="text-5xl sm:text-7xl" title="Tmux" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiZsh className="text-5xl sm:text-7xl" title="Zsh" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaDocker className="text-5xl sm:text-7xl" title="Docker" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiGooglecloud className="text-5xl sm:text-7xl" title="Google Cloud" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiWindowsterminal className="text-5xl sm:text-7xl" title="Windows Terminal" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaGitAlt className="text-5xl sm:text-7xl" title="Git" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <FaGithub className="text-5xl sm:text-7xl" title="GitHub" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiPostgresql className="text-5xl sm:text-7xl" title="PostgreSQL" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiWireshark className="text-5xl sm:text-7xl" title="Wireshark" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-4 md:p-6 rounded-2xl mx-4">
            <SiBurpsuite className="text-5xl sm:text-7xl" title="Burpsuite" />
          </div>
        </Marquee>
      </div>
    </Reveal>
  );
}
