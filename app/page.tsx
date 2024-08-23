"use client";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Stack from "./components/home/Stack";
import Experiences from "./components/home/Experiences";
import Awards from "./components/home/Awards";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Stack />
      <Experiences />
      <Awards />
    </div>
  );
}
