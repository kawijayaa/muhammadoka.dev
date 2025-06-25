import { useLastFM } from "use-last-fm"
import { motion, useCycle } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from 'fast-average-color';

function usePreviousValue<T>(value: T) {
  const ref = useRef<T>(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function useFetchLastFM() {
  const lastFM = useLastFM('okeeeeng', process.env.NEXT_PUBLIC_LASTFM_API_KEY!);
  const lastFMPrev = usePreviousValue(lastFM)
  const [hidden, setHidden] = useState(true)
  const [songName, setSongName] = useState('')
  const [songUrl, setSongUrl] = useState('')
  const [artistName, setArtistName] = useState('')
  const [albumArt, setAlbumArt] = useState('')
  const [vinylColor, setVinylColor] = useState('')
  const coverArtRef = useRef(null)
  const [animate, cycle] = useCycle(
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0 },
  )
  const [animateVinyl, cycleVinyl] = useCycle(
    { x: 0 },
    { x: 28 },
  )


  function startCycle() {
    const fac = new FastAverageColor()
    setVinylColor(fac.getColor(coverArtRef.current, { algorithm: 'simple' }).hex)

    setTimeout(() => cycle(1), 100)
    setTimeout(() => cycleVinyl(1), 100)
  }

  useEffect(() => {
    if (lastFM.status === 'playing' && lastFM.song && lastFM.song.name !== lastFMPrev.song?.name) {
      if (hidden) {
        setHidden(() => false)
      }
      cycle(0)
      cycleVinyl(0)

      setTimeout(() => {
        setSongName(lastFM.song.name.split(/[(|-]/)[0].trim() || '')
        setSongUrl(lastFM.song.url || '')
        setArtistName(lastFM.song.artist || '')
        setAlbumArt(lastFM.song.art || '')
      }, 1000)
    }

    if (lastFM.status === 'playing' && hidden && lastFM.song && lastFM.song.name === lastFMPrev.song?.name) {
      startCycle()
    }

    if (lastFM.status !== 'playing' && !hidden) {
      cycle(0)
      cycleVinyl(0)
      setTimeout(() => setHidden(() => true), 1000)
    }
  }, [lastFM.status, lastFM.song, hidden])

  return (songName &&
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={animate}
      transition={{ duration: 0.8 }}
      className={`${hidden ? 'hidden' : 'flex'} flex flex-col gap-2`}
    >
      <p className="font-bold text-md">Currently playing</p>
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 relative">
          <motion.div
            initial={{ x: 0 }}
            animate={animateVinyl}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{ backgroundColor: vinylColor }}
            className="absolute w-full h-full rounded-full bg-black"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-white rounded-full"></div>
          </motion.div>
          <Image src={albumArt} alt={songName} ref={coverArtRef} fill onLoad={startCycle} />
        </div>
        <div className="ml-5">
          <a href={songUrl} target="_blank" rel="noreferrer" className="text-lg font-bold">{songName}</a>
          <div className="text-gray-300 xl:text-sm">{artistName}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function NowPlaying() {
  return (
    <div className="xl:max-w-3/4">
      {useFetchLastFM()}
    </div>
  )
}
