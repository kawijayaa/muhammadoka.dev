import Reveal from "../animation/Reveal"
import RevealChildren from "../animation/RevealChildren"

export default function Experiences() {
  return (
    <Reveal
      variants={{
        visible: {
          opacity: 1,
          x: 0
        },
        hidden: {
          opacity: 0,
          x: -50
        },
      }}
      initial="hidden"
      reveal="visible"
      amount={0.4}
      transition={{ duration: 0.5, staggerChildren: 0.2, delayChildren: 0.3 }}
      className="flex flex-col justify-center items-center p-16 gap-8"
      useView
    >
      <p className="text-6xl font-bold mb-8">Experiences</p>
      <RevealChildren
        variants={{
          visible: {
            opacity: 1,
            x: 0
          },
          hidden: {
            opacity: 0,
            x: -50
          },
        }}
        className="flex gap-8 w-3/4 bg-gradient-to-b from-stone-900 to-stone-800 px-12 py-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-bold">Teaching Assistant Coordinator of Platform Based Development</p>
            <p className="text-xl text-gray-500">Jul 2024 - Present</p>
            <p className="text-xl">Faculty of Computer Science Universitas Indonesia</p>
          </div>
          <ul className="list-disc list-inside">
            <li>Collaborated with the teaching team and fellow coordinators to integrate basic web security knowledge into the curriculum.</li>
            <li>Coordinated the development of tutorials and assignments between all teaching assistans.</li>
            <li>Mentored 10 students in the class, guiding them through the process of learning web and mobile development.</li>
            <li>Translated tutorials and assignments from Bahasa Indonesia to English, bridging the language barrier for international students.</li>
          </ul>
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
            x: -50
          },
        }}
        className="flex gap-8 w-3/4 bg-gradient-to-b from-stone-900 to-stone-800 px-12 py-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-bold">Lead of Network, Security and Operating Systems SIG</p>
            <p className="text-xl text-gray-500">Jan 2024 - Present</p>
            <p className="text-xl">RISTEK Fasilkom UI 2024</p>
          </div>
          <ul className="list-disc list-inside">
            <li>Delivered materials about Forensics in CTF in an internal class program with 8 members attending. Topics delivered includes packet capture and analysis using Wireshark and memory forensics analysis using Volatility3.</li>
          </ul>
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
            x: -50
          },
        }}
        className="flex gap-8 w-3/4 bg-gradient-to-b from-stone-900 to-stone-800 px-12 py-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-bold">Vice Person-in-Charge of CTF</p>
            <p className="text-xl text-gray-500">Nov 2023 - Present</p>
            <p className="text-xl">COMPFEST 16</p>
          </div>
          <ul className="list-disc list-inside">
            <li>Managed a 12-man team of Scientific Committees, Technical Committee and Administrators, each responsible for developing problem-sets, deploying and maintaining the competition infrastructure, and managing participants administrational needs, to ensure smooth operations of the competition.</li>
            <li>Managed the competition infrastructure, including the platform and challenge cloud instances and their respective services.</li>
          </ul>
        </div>
      </RevealChildren>
    </Reveal>
  )
}
