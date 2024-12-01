import Reveal from "../animation/Reveal";
import RevealChildren from "../animation/RevealChildren";

export default function Awards() {
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
      className="flex flex-col justify-center items-center pt-8 pb-24"
      useView
    >
      <div className="flex flex-col w-5/6 justify-center items-center gap-8">
        <p className="text-5xl sm:text-6xl font-black mb-4">Awards</p>
        <div className="flex flex-col items-center gap-16">
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Nov 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">PwC Hack A Day 2024 1st Runner Up</p>
              <p className='sm:text-xl text-purple-400'>PwC Indonesia</p>
            </div>
            <p className="sm:text-xl text-center">
              Won 1st place in Indonesia and achieved 4th place globally with the team name of &quot;Sudah Adakah Yang Gantikank3ng&quot;
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Oct 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">Cyber Jawara 2024 International 2nd Place</p>
              <p className='sm:text-xl text-purple-400'>CSIRT</p>
            </div>
            <p className="sm:text-xl text-center">
              Achieved 2nd place with the team name of &quot;swusjask fans club&quot;, a merger between CSUI (Universitas Indonesia), HCS (Institut Teknologi Sepuluh Nopember), CSI (Institut Pertanian Bogor) and CCUG (Universitas Gunadarma). Solved all of the forensics challenges.
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Oct 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">CTF TCP1P International Winner</p>
              <p className='sm:text-xl text-purple-400'>TCP1P</p>
            </div>
            <p className="sm:text-xl text-center">
              Won with the team name of &quot;dimas fans club&quot;, a merger between CSUI (Universitas Indonesia), HCS (Institut Teknologi Sepuluh Nopember), CSI (Institut Pertanian Bogor) and CCUG (Universitas Gunadarma).
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Aug 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">GEMASTIK 2024 Keamanan Siber Finalist</p>
              <p className='sm:text-xl text-purple-400'>Puspresnas</p>
            </div>
            <p className="sm:text-xl text-center">
              Reached Top 20, going by the name &quot;HengkerNgangNgong&quot; and participated in the prestigious finals with the Attack-Defense format at UNNES Semarang.
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4 sm:w-3/4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-center text-center">
              <p className="text-lg sm:text-2xl text-stone-400 font-light">Jul 2024</p>
              <p className="text-2xl sm:text-4xl font-bold">Technofair 11.0 CTF 3rd Place</p>
              <p className='sm:text-xl text-purple-400'>BEM FIKTI UG</p>
            </div>
            <p className="sm:text-xl text-center">
              3rd place out of 10 teams that participated in the finals, going by the name &quot;635 days since last finals&quot;.
            </p>
          </RevealChildren>
          <RevealChildren
            className="flex flex-col items-center gap-4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a href="https://ctf.muhammadoka.dev/" className="sm:text-xl font-bold hover:underline decoration-purple-400 decoration-dashed underline-offset-2 decoration-1" target="_blank" rel="noreferrer">Click here for my <span className="text-purple-400">CTF write-ups</span></a>
          </RevealChildren>
        </div>
      </div>
    </Reveal>
  )
}
