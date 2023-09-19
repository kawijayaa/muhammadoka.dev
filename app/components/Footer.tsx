import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="bg-neutral-900 text-white w-full flex justify-between items-center py-8 px-32 font-bold">
      <div className="flex flex-col">
        <h1 className="text-2xl">muhammad<span className="text-transparent [-webkit-text-stroke:_1px_white]">oka</span>.dev</h1>
        <div className="flex gap-4 text-2xl">
          <a href="https://instagram.com/kawijayaa" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://github.com/kawijayaa" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/muhammadoka" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <p className="text-2xl">2023</p>
    </div>
  )
}