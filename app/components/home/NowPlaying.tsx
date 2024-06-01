import { useLastFM } from "use-last-fm"
import Image from "next/image"

function useFetchLastFM() {
  const lastFM = useLastFM('okeeeeng', process.env.NEXT_PUBLIC_LASTFM_API_KEY!);

  switch (lastFM.status) {
    case 'connecting':
      return <p className="text-sm md:text-lg">Loading Last.fm...</p>
    case 'error':
      return <p className="text-sm md:text-lg text-red-500">Cannot connect to Last.fm!</p>
    case 'playing':
      let songName = lastFM.song.name.split(/[(|-]/)[0].trim()
      return (
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 bg-black rounded-full z-10"></div>
            <div className="w-12 h-12 md:w-16 md:h-16 animate-[spin_3s_linear_infinite]">
              <Image src={lastFM.song.art} alt={lastFM.song.name} fill className="rounded-full" />
            </div>
          </div>
          <div className="">
            <a href={lastFM.song.url} target="_blank" rel="noreferrer">{songName}</a>
            <div className="text-sm text-gray-400">{lastFM.song.artist}</div>
          </div>
        </div>
      )
    case 'idle':
      return ""
  }
}

export default function NowPlaying() {
  return (
    <div className="absolute bottom-6 left-6 rounded-xl max-w-3/4">
      {useFetchLastFM()}
    </div>
  )
}
