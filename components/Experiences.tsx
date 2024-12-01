import Reveal from "@/components/animation/Reveal";
import RevealChildren from "@/components/animation/RevealChildren";

export default function Experiences() {
  return (
    <Reveal
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      amount={0.4}
      initial="hidden"
      reveal="visible"
      transition={{ duration: 0.5, staggerChildren: 0.2, delayChildren: 0.3 }}
      className="flex flex-col justify-center items-center py-24"
      useView
    >
      <div className="flex flex-col w-5/6 justify-center items-center gap-8">
        <p className="text-5xl sm:text-6xl font-black mb-4">Experiences</p>
        <div className="flex flex-col items-center gap-16">
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center">
              <p className="text-lg sm:text-xl text-stone-400 font-light">Jan 2024 - Jan 2025</p>
              <p className="text-2xl sm:text-4xl font-bold">NetSOS Lead</p>
              <p className='sm:text-xl text-purple-400'>RISTEK Fasilkom UI</p>
            </div>
            <p className="text-center text-xl">
              Conducted multiple penetration tests and finding several high-severity vulnerabilities.
              Delivered basic packet capture and memory analysis to the members of the team.
              Competed on various capture-the-flag competitions, primarily solving Forensics and Web Exploitation challenges.
              Won &quot;Best Lead&quot; on RISTEK&apos;s Q2 Town Hall.
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Aug 2024 - Dec 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">Teaching Assistant</p>
              <p className="sm:text-xl text-purple-400">Universitas Indonesia</p>
            </div>
            <p className="text-center text-xl">
              Assisted international students in learning about the basics of web and mobile development using Django and Flutter on the Platform-Based Development course.
              Translated tutorials and assignments from Indonesian to English.
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Nov 2023 - Nov 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">CTF Vice Person-in-Charge</p>
              <p className='sm:text-xl text-purple-400'>COMPFEST</p>
            </div>
            <p className="text-center text-xl">
              Managed the CTF staffs and ensured the smooth running of the competition.
              Maintained the cloud infrastructure of the competition and developed forensics and web exploitation challenges for the competition.
            </p>
          </RevealChildren>
        </div>
      </div>
    </Reveal>
  )
}
