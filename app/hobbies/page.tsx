import { BsChevronDoubleLeft } from "react-icons/bs"
import { RecentlyPlayed } from "../components/RecentlyPlayed"
import { TopAlbums } from "../components/TopAlbums"
import Navbar from "../components/Navbar"

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-emerald-400 from-10% to-sky-500 text-white">
      <Navbar />
      <div className="flex px-24 pb-24 pt-8 min-h-screen">
        <div className="flex flex-col bg-neutral-900 w-full px-16 py-12 gap-12 rounded-xl text-white z-10">
          <div className="flex justify-between items-center">
            <h1 className="text-7xl font-bold"><span className="text-transparent outline-custom">/</span>music</h1>
            <a href="/#what-i-do" className="text-4xl hover:drop-shadow-[0_5px_5px_rgb(255,255,255,0.75)] transition-all"><BsChevronDoubleLeft /></a>  
          </div>
          <div className="flex w-full h-full gap-16">
            <RecentlyPlayed />
            <TopAlbums />
          </div>
        </div>
      </div>
    </main>
  )
}