import { FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 py-6 bg-gradient-to-b bg-stone-900 rounded-t-3xl">
      <div className="flex justify-center items-center gap-8">
        <a href="https://instagram.com/kawijayaa" target="_blank" rel="noreferrer">
          <FaInstagram className="text-3xl hover:text-purple-400 transition-colors" />
        </a>
        <a href="https://github.com/kawijayaa" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl hover:text-purple-400 transition-colors" />
        </a>
        <a href="https://discordapp.com/users/243690464795033601" target="_blank" rel="noreferrer">
          <FaDiscord className="text-3xl hover:text-purple-400 transition-colors" />
        </a>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p className="font-bold text-center tracking-widest">muhammad<span className="text-purple-400">oka</span></p>
        <p className="font-black">|</p>
        <p>copyright {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
