import { JetBrains_Mono, Instrument_Serif } from 'next/font/google';

import NowPlaying from './NowPlaying';
import Reveal from '../animation/Reveal';

const mono = JetBrains_Mono({ subsets: ["latin"] });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <Reveal
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1
        },
      }}
      initial="hidden"
      reveal="visible"
      amount={0}
      transition={{ duration: 0.5 }}
      className="w-dvw h-dvh p-16"
      useView
    >
      <div className="w-full h-full flex flex-col justify-between rounded-3xl px-16 py-12 bg-[url('../public/neon.svg')] bg-cover drop-shadow-[0_15px_20px_rgba(63,34,80,0.5)]">
        <div className="flex flex-col gap-6">
          <p className="text-[7rem] font-black leading-[1.125]">Telling computers what to do since <span className={`${serif.className} tracking-wide`}>2012</span>.</p>
        </div>
        <div className="flex justify-between items-end">
          <NowPlaying />
          <p className={`${mono.className} text-2xl`}>&#47;&#47; muhammadoka.dev</p>
        </div>
      </div>
    </Reveal>
  )
}
