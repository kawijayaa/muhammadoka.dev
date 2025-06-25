"use client"

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import { FiRefreshCw } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const mono = Fira_Code({ subsets: ['latin'] })

const phrases = [
  "tells computers what to do since 2013.",
  "based in brisbane, au.",
  "is from jakarta, id.",
  "wireshark wizard.",
  "proficient in running nmap.",
  "#1 rex orange county fan (source: trust me).",
  "certified C2 connoisseur.",
  "FLAG{0bl1g4t0ry_h1dd3N_fl4G}",
]

function getRandomElement(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function RandomPhrases() {
  const [phrase, setPhrase] = useState(phrases[0])
  const [showRefreshButton, setRefreshButton] = useState('hide')

  return (
    <div
      className={`${mono.className} xl:text-xl flex items-center gap-4 xl:w-max`}
      onMouseEnter={() => global?.screen && global.screen.availWidth >= 1280 && setRefreshButton('show')}
      onMouseLeave={() => global?.screen && global.screen.availWidth >= 1280 && setRefreshButton('hide')}
    >
      <div>
        <AnimatePresence mode='wait'>
          <motion.p
            key={phrase}
            initial={{
              y: -30,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: 30,
              opacity: 0
            }}
            onClick={() => global?.screen && screen.availWidth < 1280 && setPhrase(getRandomElement(phrases))}
          >
            {phrase}
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.div
        variants={{
          show: {
            opacity: 1
          },
          hide: {
            opacity: 0
          }
        }}
        animate={showRefreshButton}
      >
        <FiRefreshCw onClick={() => setPhrase(getRandomElement(phrases))} className="cursor-pointer" />
      </motion.div>
    </div>
  )
}
