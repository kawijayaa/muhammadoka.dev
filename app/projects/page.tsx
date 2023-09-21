import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiPython, SiMongodb, SiInstagram } from "react-icons/si"
import { BsChevronDoubleLeft } from "react-icons/bs"
import Navbar from "../components/Navbar"

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-emerald-400 from-10% to-sky-500 text-white">
      <Navbar />
      <div className="flex px-24 pb-24 pt-8">
        <div className="flex flex-col bg-neutral-900 px-16 py-12 gap-6 w-full rounded-xl text-white z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-7xl font-bold"><span className="text-transparent outline-custom">/</span>projects</h1>
            <a href="/#what-i-do" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] transition-all"><BsChevronDoubleLeft /></a>  
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/kawijayaa/muhammadoka.dev" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.5)] hover:underline transition-all">
                  <h1>muhammadoka.dev</h1>
                </a>
                <SiNextdotjs className="text-3xl" />
                <SiTypescript className="text-3xl" />
                <SiTailwindcss className="text-3xl" />
              </div>
              <p className="text-2xl">This is the fourth(?) version of my personal website, built using Next.js. Previous versions used Vue.js, or vanilla HTML, CSS, and JS.</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <a href="https://kepo2023.vercel.app/" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.5)] hover:underline transition-all" target="_blank" rel="noreferrer">
                  <h1>Kedubes Expo 2023 Website</h1>
                </a>
                <SiNextdotjs className="text-3xl" />
                <SiJavascript className="text-3xl" />
                <SiTailwindcss className="text-3xl" />
              </div>
              <p className="text-2xl">A freelance job I took for SMAN 12 Jakarta. The website development took 8 days from creating the project to deployment.</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/kawijayaa/CekAsdosan" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.5)] hover:underline transition-all" target="_blank" rel="noreferrer">
                  <h1>CekAsdosan</h1>
                </a>
                <SiPython className="text-3xl" />
                <SiMongodb className="text-3xl" />
              </div>
              <p className="text-2xl">A program to check the Fasilkom TA Recruitment website for vacancies. Built using Python with the Selenium package.</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/kawijayaa/CekAsdosan" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.5)] hover:underline transition-all" target="_blank" rel="noreferrer">
                  <h1>okengsukafoto</h1>
                </a>
                <SiInstagram className="text-3xl" />
              </div>
              <p className="text-2xl">My automotive photography project. Started in 2020 as a boredom cure when the pandemic hits. Currently on indefinite hiatus.</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  )
}