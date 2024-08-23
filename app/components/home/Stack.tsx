import Reveal from "../animation/Reveal";
import Marquee from "react-fast-marquee";
import { FaPython, FaJava, FaRust, FaReact, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6"
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript, SiDjango, SiSpring, SiTailwindcss, SiNeovim, SiWindowsterminal, SiPostgresql, SiGooglecloud, SiZsh, SiTmux } from "react-icons/si";

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
      className="flex flex-col justify-center items-center p-16 gap-8"
      useView
    >
      <p className="text-6xl font-bold mb-8">Tech Stack</p>
      <div className="flex flex-col w-3/4 justify-center items-center gap-8">
        <p className="text-4xl">Languages &amp; Frameworks</p>
        <Marquee
          speed={60}
        >
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaPython className="text-6xl" title="Python" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiDjango className="text-6xl" title="Django" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiTypescript className="text-6xl" title="Typescript" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaReact className="text-6xl" title="React" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <RiNextjsLine className="text-6xl" title="Next.js" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiTailwindcss className="text-6xl" title="Tailwind CSS" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaJava className="text-6xl" title="Java" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiSpring className="text-6xl" title="Spring" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaGolang className="text-6xl" title="Go" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaRust className="text-6xl" title="Rust" />
          </div>
        </Marquee>
        <p className="text-4xl">Tools</p>
        <Marquee
          speed={60}
          direction="right"
        >
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiNeovim className="text-6xl" title="Neovim" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiTmux className="text-6xl" title="Tmux" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiZsh className="text-6xl" title="Zsh" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaDocker className="text-6xl" title="Docker" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiGooglecloud className="text-6xl" title="Google Cloud" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiWindowsterminal className="text-6xl" title="Windows Terminal" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaGitAlt className="text-6xl" title="Git" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <FaGithub className="text-6xl" title="GitHub" />
          </div>
          <div className="flex gap-8 bg-gradient-to-b from-stone-900 to-stone-800 p-6 rounded-2xl mx-4">
            <SiPostgresql className="text-6xl" title="PostgreSQL" />
          </div>
        </Marquee>
      </div>
    </Reveal>
  );
}
