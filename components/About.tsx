import Reveal from "@/components/animation/Reveal";

export default function About() {
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
      className="flex flex-col justify-center items-center pt-32 pb-16"
      useView
    >
      <div className="flex flex-col w-5/6 justify-center items-center gap-8">
        <p className="text-5xl sm:text-6xl font-black">About</p>
        <p className="text-xl sm:text-3xl">
          G&apos;day 👋! My name is <span className="underline decoration-purple-400 decoration-dashed underline-offset-2 decoration-1">Muhammad Oka</span>.
          Currently a third-year computer science student at the University of Queensland.
          My journey into computer science began in first grade elementary when I joined the school&apos;s robotics club, igniting a lifelong curiosity for technology.
        </p>
        <p className="text-xl sm:text-3xl">
          Outside of academic obligations, I do side-projects as a playground to solidify my understanding in computer science and explore new technologies.
          Some topics I am currently interested are <span className="underline decoration-purple-400 decoration-dashed underline-offset-2 decoration-1">Cyber Security</span>, <span className="underline decoration-purple-400 decoration-dashed underline-offset-2 decoration-1">Cloud Infrastructure</span>, and <span className="underline decoration-purple-400 decoration-dashed underline-offset-2 decoration-1">Web Development</span>.
          I also like to participate in capture-the-flag competitions from time to time, mainly solving Forensics and Web Exploitation challenges.
        </p>
      </div>
    </Reveal>
  )
}
