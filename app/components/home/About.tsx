import { useEffect, useRef } from "react";
import Typed from 'typed.js';

import Reveal from "../animation/Reveal";

export default function About() {
  const name = useRef(null);
  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ['Me', 'Oka', 'k3ng'],
      typeSpeed: 200,
      backSpeed: 60,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    }
  })

  return (
    <Reveal
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: {
          opacity: 0,
          y: 50,
        },
      }}
      initial="hidden"
      reveal="visible"
      amount={0.5}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center p-16 pt-32 gap-8"
      useView
    >
      <p className="text-6xl font-bold">About <span ref={name}></span></p>
      <p className="text-3xl w-5/6">
        A junior computer science student at Universitas Indonesia with over two years of experience in CTF competitions, focusing on web exploitation and forensics.
        Currently interested in cyber security, web development, DevOps, programming languages, and computer science in general.
        I also build side-projects around said interests on my spare time for fun.
      </p>
      <p className="text-3xl w-5/6">
        Outside of tech, I&apos;m an audiophile listening to broad ranges of genres from jazz-fusion to metal and rap. I&apos;m also have a passion for cars, motorcycles, music gear and sneakers.
      </p>
    </Reveal>
  );
}
