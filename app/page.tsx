"use client";

import Hero from "./components/home/Hero";
import Reveal from "./components/animation/Reveal";
import About from "./components/home/About";
import Experiences from "./components/home/Experiences";
import Stack from "./components/home/Stack";
import Awards from "./components/home/Awards";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <Reveal
      variants={{
        hidden: {
          opacity: 0,
          y: 50
        },
        visible: {
          opacity: 1,
          y: 0
        },
      }}
      initial="hidden"
      reveal="visible"
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Stack />
      <Experiences />
      <Awards />
      <Footer />
    </Reveal>
  );
}
