"use client";

import Hero from "@/components/Hero";
import Reveal from "@/components/animation/Reveal";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Stack from "@/components/Stack";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

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
