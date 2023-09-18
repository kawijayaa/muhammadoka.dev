import NowPlaying from "./components/NowPlaying"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-emerald-400 from-40% to-sky-500 text-white">
      <Navbar />
      <div className="flex justify-between min-h-screen flex-col px-24 gap-8 bg-neutral-900 text-white [clip-path:polygon(0%_0%,100%_0%,33%_100%,0%_100%)] z-10">
        <div></div>
        <div>
            <h1 className="text-7xl font-bold">hello! my name is <span className="text-transparent outline-custom">oka</span>.</h1>
            <h2 className="text-3xl">telling computers what to do since 2013.</h2>
            <a href="#">
              <h3 className="text-xl font-light">&gt; learn more</h3>
            </a>
        </div>
        <div className="justify-items-end mb-12">
          <NowPlaying />
        </div>
      </div>
    </main>
  )
}