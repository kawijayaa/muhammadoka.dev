import Head from 'next/head';

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
                <p className="text-2xl font-semibold">Development Software</p>
                <ul className="py-2 px-3 pb-8 text-lg">
                    <li>&gt; VSCodium</li>
                    <li>&gt; Git</li>
                    <li>&gt; Ghidra</li>
                </ul>
                <p className="text-2xl font-semibold">Design Software</p>
                <ul className="py-2 px-3 pb-8 text-lg">
                    <li>&gt; Adobe Photoshop</li>
                    <li>&gt; Adobe Lightroom</li>
                    <li>&gt; Adobe Premiere Pro</li>
                    <li>&gt; Adobe After Effects</li>
                    <li>&gt; Figma</li>
                </ul>
                <p className="text-2xl font-semibold">Programming Languages</p>
                <ul className="py-2 px-3 pb-8 text-lg">
                    <li>&gt; Python</li>
                    <li>&gt; Javascript</li>
                    <li>&gt; C</li>
                </ul>
                <p className="text-2xl font-semibold">Setup</p>
                <ul className="py-2 px-3 pb-8 text-lg">
                    <li>&gt; Laptop: ASUS ROG GL552VX</li>
                    <li>&gt; Monitor: Samsung TV</li>
                    <li>&gt; Keyboard: Vortexseries GT-6 with Custom Acrylic Case</li>
                    <li>&gt; Switch: Ajazz Kiwi lubed with Krytox 205g0 & 105g0</li>
                    <li>&gt; Stabilizers: Durock Black Plate Mount lubed with Krytox 205g0 and Holee Mod</li>
                    <li>&gt; Keycaps: Press Play Pandora PBT</li>
                    <li>&gt; Mouse: Rexus Daxa Air IV Black</li>
                    <li>&gt; Deskmat: Noir Diagonal Black Shades</li>
                    <li>&gt; IEM: Moondrop Starfield with Xinhs Pure Silver cable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
