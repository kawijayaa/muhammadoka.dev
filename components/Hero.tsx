import { JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import Image from 'next/image';

import NowPlaying from '@/components/NowPlaying';

const mono = JetBrains_Mono({ subsets: ["latin"] });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="w-dvw h-dvh p-8 sm:p-16">
      <div className="w-full h-full drop-shadow-[0_15px_20px_rgba(63,34,80,0.5)]">
        <Image src="/neon.svg" alt="hero" width={400} height={400} priority className="absolute -z-10 w-full h-full object-cover rounded-3xl" />
        <div className="h-full flex flex-col justify-between p-8 sm:py-8 sm:px-12">
          <div className="flex flex-col gap-2">
            <p className="text-5xl sm:text-7xl xl:text-[7rem] font-black leading-[1.125]">Telling computers what to do since <span className={`${serif.className} tracking-wide`}>2012</span>.</p>
            <p className={`${mono.className} text-lg text-stone-300`}>&#47;&#47; muhammad<span className='text-purple-400'>oka</span>.dev</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <NowPlaying />
          </div>
        </div>
      </div>
    </div>
  )
}
