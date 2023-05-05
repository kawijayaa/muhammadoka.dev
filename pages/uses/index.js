import Head from 'next/head';
import { 
  SiVisualstudiocode, 
  SiGithub, 
  SiAdobephotoshop, 
  SiAdobepremierepro,
  SiFigma,
  SiPython,
  SiJavascript,
  SiC,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiWindows,
  SiKalilinux,
  SiWindowsterminal
} from 'react-icons/si';
import {FaJava} from 'react-icons/fa';

export default function Uses() {
  return (
    <div>
      <Head>
        <title>muhammadoka.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen py-14">
          <div className="text-black sm:px-10 md:px-40 dark:text-white">
            <div>
              <h1 className="xxs:text-6xl sm:text-8xl font-semibold pb-5"><span className="text-cyan-500">/</span>uses</h1>
              <p className="xxs:text-lg sm:text-xl">This is the hardwares and softwares that I use daily.</p>
              <div className="py-8">
                <p className="text-xl font-semibold">Languages & Frameworks</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiPython />
                    <FaJava />
                    <SiC />
                    <SiJavascript />
                    <SiNextdotjs />
                    <SiTailwindcss />
                </ul>
                <p className="text-xl font-semibold">Development Software</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiVisualstudiocode />
                    <SiWindowsterminal />
                    <SiGithub />
                    <SiDocker />
                </ul>
                <p className="text-xl font-semibold">Creative Software</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiAdobephotoshop />
                    <SiAdobepremierepro />
                    <SiFigma />
                </ul>
                <p className="text-xl font-semibold">Operating Systems</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiWindows />
                    <SiKalilinux />
                </ul>
                <p className="text-xl font-semibold">Setup</p>
                <ul className="py-2 px-3 pb-8 lg:text-lg">
                    <li>&gt; Laptop: ASUS ROG Zephyrus M16 (i7 12th Gen, RTX 3060)</li>
                    <li>&gt; Monitor: Samsung TV</li>
                    <li>&gt; Keyboard: Vortexseries GT-65</li>
                    <li>&gt; Keyboard Switch: Gateron x GoPolar Vermilion Bird</li>
                    <li>&gt; Keycaps: Press Play Pandora PBT</li>
                    <li>&gt; Mouse: Rexus Daxa Air IV</li>
                </ul>
                <p className="text-xl font-semibold">Audio</p>
                <ul className="py-2 px-3 lg:text-lg">
                    <li>&gt; Headphones: Sennheiser HD560S</li>
                    <li>&gt; Headphones Cable: Onezero SPC-OCC Custom</li>
                    <li>&gt; IEM: Thieaudio Elixir</li>
                    <li>&gt; IEM Cable: VJC Lam Fath Hybrid</li>
                    <li>&gt; DAC: Shanling UA3</li>
                    <li>&gt; Microphone: Soundtech Lite</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
