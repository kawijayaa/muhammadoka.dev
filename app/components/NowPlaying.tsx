import { useLastFM } from "use-last-fm"

function useFetchLastFM() {
  const lastFM = useLastFM('okeeeeng', process.env.NEXT_PUBLIC_LASTFM_API_KEY!);

  switch (lastFM.status) {
    case 'connecting':
      return <p className="text-sm md:text-lg">Loading...</p>
    case 'error':
      return <p className="text-sm md:text-lg text-red-500">Cannot connect to Last.fm API!</p>
    case 'playing':
      let songName = lastFM.song.name.split(/[(|-]/)[0].trim()
      return (
        <div className="flex items-center gap-4">
          <img src={lastFM.song.art} alt={lastFM.song.name} className="w-12 md:w-16 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="">
            <a href={lastFM.song.url} target="_blank" rel="noreferrer">{songName}</a>
            <div className="text-sm text-gray-400">{lastFM.song.artist}</div>
          </div>
        </div>
      )
    case 'idle':
      return <p className="text-sm md:text-lg">Currently not playing any songs</p>
  }
}

export default function NowPlaying() {
  return (
    <div className="absolute bottom-4 left-4 bg-stone-900 p-3 md:p-4 rounded-xl max-w-3/4">
      {useFetchLastFM()}
    </div>
  )
}
