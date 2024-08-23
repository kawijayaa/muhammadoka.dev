import Reveal from "../animation/Reveal";
import RevealChildren from "../animation/RevealChildren";
import { FaMedal } from "react-icons/fa";

export default function Awards() {
  return (
    <Reveal
      variants={{
        visible: {
          opacity: 1,
          x: 0
        },
        hidden: {
          opacity: 0,
          x: 50
        },
      }}
      transition={{ duration: 0.5, staggerChildren: 0.2, delayChildren: 0.3 }}
      initial="hidden"
      reveal="visible"
      amount={0.4}
      className="flex flex-col justify-center items-center p-16 gap-8"
      useView
    >
      <p className="text-6xl font-bold mb-8">Awards</p>
      <RevealChildren
        variants={{
          visible: {
            opacity: 1,
            x: 0
          },
          hidden: {
            opacity: 0,
            x: 50
          },
        }}
        className="grid grid-cols-6 items-center gap-8 w-3/4 bg-gradient-to-b from-stone-900 to-stone-800 px-12 py-8 rounded-2xl outline outline-4 outline-orange-900"
      >
        <div className="flex flex-col gap-4 col-span-5">
          <div>
            <p className="text-2xl font-bold">Technofair 11.0 CTF 3rd Place</p>
            <p className="text-xl text-gray-500">Jul 2024</p>
            <p>Going by the team name of &quot;635 days since last finals&quot;, we placed 3rd in the Technofair 11.0 CTF competition, held by BEM FIKTI Universitas Gunadarma in Bekasi, Indonesia.</p>
          </div>
        </div>
        <div className="size-24 justify-self-end text-orange-900">
          <FaMedal className="size-full" />
        </div>
      </RevealChildren>
      <RevealChildren
        variants={{
          visible: {
            opacity: 1,
            x: 0
          },
          hidden: {
            opacity: 0,
            x: 50
          },
        }}
        className="grid grid-cols-6 items-center gap-8 w-3/4 bg-gradient-to-b from-stone-900 to-stone-800 px-12 py-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4 col-span-5">
          <div>
            <p className="text-2xl font-bold">GEMASTIK XVII Keamanan Siber Finalist</p>
            <p className="text-xl text-gray-500">Aug 2024</p>
            <p>Going by the team name of &quot;HengkerNgangNgong&quot;, we secured the top 20 in the GEMASTIK XVII Keamanan Siber competition, held by BPTI Kemendikbud and Universitas Negeri Semarang.</p>
          </div>
        </div>
        <div className="size-24 justify-self-end">
          <FaMedal className="size-full" />
        </div>
      </RevealChildren>
      <RevealChildren
        variants={{
          visible: {
            opacity: 1,
            x: 0
          },
          hidden: {
            opacity: 0,
            x: 50
          },
        }}
        className="grid grid-cols-6 items-center gap-8 w-3/4 bg-gradient-to-b from-stone-900 to-stone-800 px-12 py-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4 col-span-5">
          <div>
            <p className="text-2xl font-bold">CTF COMPFEST 14 Finalist</p>
            <p className="text-xl text-gray-500">Sep 2022</p>
            <p>Going by the team name of &quot;HengkerNgangNgong&quot;, we secured the top 15 out of 117 teams in the CTF COMPFEST 14 competition, held by COMPFEST at Faculty of Computer Science Universitas Indonesia in Depok, Indonesia.</p>
          </div>
        </div>
        <div className="size-24 justify-self-end">
          <FaMedal className="size-full" />
        </div>
      </RevealChildren>
    </Reveal>
  )
}
