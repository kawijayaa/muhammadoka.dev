"use client"

import NowPlaying from "./components/home/NowPlaying";

export default function Home() {
  return (
    <div className="flex items-center justify-between h-full p-8 gap-8">
      <div className="flex flex-col">
        <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=54&duration=3000&pause=1000&color=06b6d4&vCenter=true&random=false&width=600&height=70&lines=%2F%2F+muhammadoka.dev;%2F%2E%2A%5C%2E%28go%7Cpy%7Crs%29%24%2F" alt="Typing SVG" />
        <p className="text-sm md:text-xl">telling computers what to do since 2012.</p>
      </div>
      <div className="flex flex-col text-right gap-4 md:gap-12 tracking-widest md:text-xl font-light">
        <a href="/about" className="hover:underline hover:text-cyan-500">about</a>
        <a href="/projects" className="hover:underline hover:text-cyan-500">projects</a>
        <a href="/experiences" className="hover:underline hover:text-cyan-500">experiences</a>
        <a href="/uses" className="hover:underline hover:text-cyan-500">uses</a>
        <a href="/music" className="hover:underline hover:text-cyan-500">music</a>
        <a href="/socials" className="hover:underline hover:text-cyan-500">socials</a>
      </div>
      <NowPlaying />
    </div>
  );
}
