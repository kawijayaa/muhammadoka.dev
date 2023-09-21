import { SiPython, SiDjango, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiVisualstudiocode, SiWindowsterminal, SiDocker, SiGit, SiWindows11, SiKalilinux } from "react-icons/si" 
import { FaJava } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { BsChevronDoubleLeft } from "react-icons/bs"
import Navbar from "../components/Navbar"

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-emerald-400 from-10% to-sky-500 text-white">
      <Navbar />
      <div className="flex px-24 pb-24 pt-8 min-h-screen">
        <div className="flex flex-col justify-between bg-neutral-900 px-16 py-12 gap-12 w-full rounded-xl text-white z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-7xl font-bold"><span className="text-transparent outline-custom">/</span>uses</h1>
            <a href="/#what-i-do" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] transition-all"><BsChevronDoubleLeft /></a>  
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Programming Languages</h2>
            <div className="flex gap-8 text-6xl">
              <SiPython />
              <FaJava />
              <SiJavascript />
              <SiTypescript /> 
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Frameworks</h2>
            <div className="flex gap-8 text-6xl">
              <SiNextdotjs />
              <SiTailwindcss />
              <SiDjango />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Development Software</h2>
            <div className="flex gap-8 text-6xl">
              <SiVisualstudiocode />
              <SiWindowsterminal />
              <SiGit />
              <SiDocker />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Operating Systems</h2>
            <div className="flex gap-8 text-6xl">
              <SiWindows11 />
              <SiKalilinux /> 
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Desktop Setup</h2>
            <ul className="text-2xl list-['>_'] list-inside space-y-2">
              <li>Laptop: Asus ROG Zephyrus M16 2022 (i7-12700H, RTX 3060)</li>
              <li>Monitor: Samsung TV</li>
              <li>
                Keyboard: Vortexseries GT-65 Black
                <ul className="pl-5 list-['>_'] list-inside">
                  <li>Switches: Gateron x GoPolar Vermillion Bird</li>
                  <li>Keycaps: Press Play Pandora PBT</li>
                  <li>Stabilizers: TX Clip In Stabilizers</li>
                </ul>
              </li>
              <li>Mouse: Rexus Daxa Air IV</li>
              <li>Deskmat: Noir Diagonal Black Shades</li>
              <li>Microphone: Soundtech Lite</li>
              <li>DAC & Amplifier: Shanling UA3</li>
              <li>
                Headphones: Sennheiser HD 560S
                <ul className="pl-5 list-['>_'] list-inside">
                  <li>Cable: Onezero SPC-OCC Custom</li>
                </ul>
              </li>
              <li>
                IEM: Thieaudio Elixir
                <ul className="pl-5 list-['>_'] list-inside">
                  <li>Cable: VJC Lam Fath Hybrid</li>
                  <li>Cable Termination: Oyaide Silver Rhodium 3.5mm</li>
                  <li>Eartips: Acoustune AEX07</li>
                </ul>
              </li>
              <li>MIDI Controller: M-Audio Keystation 49 MK3</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}