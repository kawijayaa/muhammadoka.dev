import NowPlaying from "./components/NowPlaying"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-emerald-400 from-10% via-sky-500 via-75% to-emerald-400 text-white">
      <div className="flex justify-between min-h-screen flex-col px-16 py-12 gap-8 bg-neutral-900 text-white [clip-path:polygon(0%_0%,100%_0%,33%_100%,0%_100%)] z-10">
        <div></div>
        <div className="flex flex-col gap-2">
            <h1 className="text-7xl font-bold">hello! my name is <span className="text-transparent outline-custom">oka</span>.</h1>
            <div>
              <h2 className="text-3xl">telling computers what to do since 2013.</h2>
              <h3 className="text-2xl font-light hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] transition-all w-max">
                <a href="#about">&gt; learn more</a>
              </h3>
            </div>
        </div>
        <div className="justify-items-end">
          <NowPlaying />
        </div>
      </div>
      <div className="flex p-16 min-h-screen w-full bg-neutral-900 absolute [clip-path:polygon(0%_0%,33%_0%,0%_47.5%)] z-10">
        <h1 className="text-7xl font-bold">about<br/><span className="text-transparent outline-custom">me</span></h1>
      </div>
      <div id="about" className="flex justify-center items-end min-h-screen w-full flex-col px-16 py-16 gap-8 z-10">
        <div className="p-12 bg-neutral-900 bg-opacity-80 drop-shadow-[0_10px_10px_rgb(0,0,0,0.5)] rounded-xl max-w-5xl">
          <p className="text-2xl">Hello! My name is Muhammad Oka, known as Oka. I started programming in 3rd grade after joining the robotics team in my elementary school.<br/>
          Currently a double-degree computer science sophomore at the University of Indonesia. I am interested in Cyber Security, Web Development and DevOps.<br/><br/>
          Outside from the computer science, I have a passion for music, photography, and videography.</p>
        </div>
        <p></p>
      </div>
      <div id="what-i-do" className="flex flex-col min-h-screen w-full justify-center items-center gap-8">
        <h1 className="text-7xl font-bold drop-shadow-lg">learn about what <span className="text-transparent outline-custom">i</span> do.</h1>
        <div className="flex justify-between gap-32 text-4xl">
          <a href="/projects" className="hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] hover:scale-105 transition-all">projects</a>
          <a href="/uses" className="hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] hover:scale-105 transition-all">uses</a>
          <a href="/hobbies" className="hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] hover:scale-105 transition-all">hobbies</a>
        </div>
      </div>
    </main>
  )
}