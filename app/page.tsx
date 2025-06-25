"use client";

import Image from 'next/image';

import NowPlaying from '@/components/NowPlaying';
import RandomPhrases from '@/components/RandomPhrases';
import { FaSpinner } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className='w-dvw h-dvh'>
        <AnimatePresence>
          {!loaded && (<motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-dvw h-dvh fixed bg-black z-50 flex flex-col justify-between items-center gap-8 p-8`}
          >
            <div></div>
            <FaSpinner className='text-4xl animate-spin' />
            <p className='text-neutral-900 font-black leading-relaxed'>&#47;&#47; muhammadoka.dev</p>
          </motion.div>)}
        </AnimatePresence>
        <Image src="neon.svg" alt="Background image" className='-z-50 object-cover opacity-75' onLoad={() => setLoaded(true)} fill />
        <div className='p-8 xl:px-16 xl:py-12 flex flex-col justify-between h-full'>
          <div className='flex flex-col xl:gap-4'>
            <h1 className='text-[2.75rem] xl:text-8xl font-black'>muhammad<span className='text-purple-500'>oka</span>.</h1>
            <RandomPhrases />
          </div>
          <div className='xl:self-end'>
            <NowPlaying />
          </div>
        </div>
      </div>
      <div className='w-dvw h-dvh'>
        <div className='flex flex-col gap-6 xl:gap-8 p-8 xl:p-16'>
          <p className='text-6xl xl:text-8xl/tight font-bold'>G&apos;day 👋!</p>
          <p className='text-xl xl:text-3xl xl:w-1/2 xl:leading-relaxed'>My name is Muhammad Oka, a third-year cyber security student at the University of Queensland with a burning passion for cyber security. I spend most of my time exploring new techniques used by threat actors in real life and turning them into engaging CTF challenges for others to learn from. I am used to both sides of cyber security: either red-teaming by using techniques to break into systems (legally) or blue-teaming by analysing artifacts and learning ways to reduce risks of intrusion.</p>
        </div>
      </div>
      <div className='w-dvw h-dvh'>
        <div className='flex flex-col gap-6 xl:gap-8 p-8 xl:p-16'>
          <p className='text-6xl xl:text-8xl/tight font-bold'>G&apos;day 👋!</p>
          <p className='text-xl xl:text-3xl xl:w-1/2 xl:leading-relaxed'>My name is Muhammad Oka, a third-year cyber security student at the University of Queensland with a burning passion for cyber security. I spend most of my time exploring new techniques used by threat actors in real life and turning them into engaging CTF challenges for others to learn from. I am used to both sides of cyber security: either red-teaming by using techniques to break into systems (legally) or blue-teaming by analysing artifacts and learning ways to reduce risks of intrusion.</p>
        </div>
      </div>
    </div>
  );
}
