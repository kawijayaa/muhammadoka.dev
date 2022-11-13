import Head from 'next/head';
import { 
  SiVisualstudiocode, 
  SiGithub, 
  SiAdobeaftereffects,
  SiAdobephotoshop, 
  SiAdobepremierepro,
  SiAdobelightroom,
  SiFigma,
  SiPython,
  SiJavascript,
  SiC,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker } from 'react-icons/si';

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
              <h1 className="xxs:text-6xl xs:text-8xl font-semibold pb-5"><span className="text-cyan-500">/</span>uses</h1>
              <p className="xxs:text-lg xs:text-xl">This is the hardwares and softwares that I use daily.</p>
              <div className="py-8">
                <p className="text-xl font-semibold">Development Software</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiVisualstudiocode />
                    <SiGithub />
                    <SiDocker />
                </ul>
                <p className="text-xl font-semibold">Creative Software</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiAdobeaftereffects />
                    <SiAdobelightroom />
                    <SiAdobepremierepro />
                    <SiAdobephotoshop />
                    <SiFigma />
                </ul>
                <p className="text-xl font-semibold">Languages & Frameworks</p>
                <ul className="py-6 px-3 pb-8 xxs:text-4xl lg:text-6xl flex xxs:gap-6 lg:gap-8">
                    <SiPython />
                    <SiC />
                    <SiJavascript />
                    <SiNextdotjs />
                    <SiTailwindcss />
                </ul>
                <p className="text-xl font-semibold">Setup</p>
                <ul className="py-2 px-3 pb-8 lg:text-lg">
                    <li>&gt; Laptop: ASUS ROG Zephyrus M16 2022</li>
                    <li>&gt; Monitor: Samsung TV</li>
                    <li>&gt; Keyboard: Vortexseries GT-6 with Custom Acrylic Case</li>
                    <li>&gt; Keyboard Switch: Ajazz Kiwi Tactile Switch</li>
                    <li>&gt; Keycaps: Press Play Pandora PBT</li>
                    <li>&gt; Mouse: Rexus Daxa Air IV</li>
                </ul>
                <p className="text-xl font-semibold">Audio</p>
                <ul className="py-2 px-3 lg:text-lg">
                    <li>&gt; Headphones: Sennheiser HD560S</li>
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
