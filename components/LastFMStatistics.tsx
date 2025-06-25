import { useGetTopAlbums, useGetTopTracks, useGetRecentTracks, useGetTrackImage, trimSongTitle, LASTFM_PLACEHOLDER_IMAGE, } from "@/lib/LastFMStatistics";
import Image from "next/image";

export default function LastFMStatistics() {
  const topAlbums = useGetTopAlbums("okeeeeng", 5)
  const topTracks = useGetTopTracks("okeeeeng", 5)
  const recentTracks = useGetRecentTracks("okeeeeng", 5)

  const TrackImage = (props: { title: string, artist: string }) => {
    let trackImageUrl = useGetTrackImage(props.title, props.artist)

    if (!trackImageUrl) {
      trackImageUrl = LASTFM_PLACEHOLDER_IMAGE
    }

    return (
      <Image priority alt={props.title} width={100} height={100} src={trackImageUrl} />
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <p className="text-4xl font-bold">Listening Habits</p>
        <a href="https://www.last.fm/user/okeeeeng" target="_blank" className="text-neutral-500">more on Last.fm</a>
      </div>
      <div className="flex gap-16 justify-center">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Recently Played</p>
          {recentTracks?.map(track => (
            <div key={track.name} className="flex gap-4 items-center">
              <TrackImage title={track.name} artist={track.artist.name} />
              <div>
                <a href={track.url} className="text-xl font-medium">{trimSongTitle(track.name)}</a>
                <p className="text-neutral-500">{track.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Top Tracks</p>
          {topTracks?.map(track => (
            <div key={track.name} className="flex gap-4 items-center">
              <TrackImage title={track.name} artist={track.artist.name} />
              <div>
                <a href={track.url} className="text-xl font-medium">{trimSongTitle(track.name)}</a>
                <p className="text-neutral-500">{track.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Top Albums</p>
          {topAlbums?.map(album => (
            <div key={album.name} className="flex gap-4 items-center">
              <Image alt={album.name} width={100} height={100} src={album.image[2]["#text"]} />
              <div>
                <a href={album.url} className="text-xl font-medium">{trimSongTitle(album.name)}</a>
                <p className="text-neutral-500">{album.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
