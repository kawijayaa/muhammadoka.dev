import useSWR from 'swr';
import { RecentTracks } from 'use-last-fm';

export interface LastFMResponseBody {
  toptracks: RecentTracks;
}

export interface TrackInfo {
  track: Track;
}

export interface Track {
  album: Album;
}

export interface Album {
  image: Image[];
}

export interface Image {
  '#text': string;
}

const GetImageUrl = (props: { track: string, artist: string }) => {
  const songName = props.track.split(/[(|-]/)[0].trim()
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: lfmData = null } = useSWR<TrackInfo>(
    `//ws.audioscrobbler.com/2.0/?method=track.getinfo&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1&track=${encodeURI(props.track)}&artist=${encodeURI(props.artist)}&autocorrect=1`,
    fetcher,
    { refreshInterval: 15 * 1000 },
  );

  let imageUrl = lfmData?.track?.album?.image[2]?.['#text'];

  if (imageUrl) {
    return (
      <img src={imageUrl} alt={songName} className="w-16 rounded-full" />
    );
  } else {
    return (
      <img src='https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png' alt={songName} className="w-16 rounded-full" />
    );
  }
}

export const TopTracks = () => {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: lfmData = null } = useSWR<LastFMResponseBody>(
    `//ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=okeeeeng&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=1month&limit=5`,
    fetcher,
    { refreshInterval: 15 * 1000 },
  );

  const trackList = lfmData?.toptracks?.track;

  return (
    <div className="flex flex-col gap-2 md:text-right">
      {trackList?.map(function(track?: any, index?: any) {
        let songName = track?.name.split(/[(|-]/)[0].trim()

        return (
          <div className="flex flex-row-reverse md:flex-row items-center justify-end py-2 px-4 gap-4" key={index}>
            <div className="flex flex-col gap-1">
              <a href={track?.url} className="text-md md:text-xl" target="_blank" rel="noreferrer">{songName}</a>
              <a href={track?.artist?.url} className="text-sm" target="_blank" rel="noreferrer">{track?.artist?.name}</a>
            </div>
            <a href={track?.url} className="text-xl" target="_blank" rel="noreferrer">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 bg-black rounded-full z-10"></div>
                <GetImageUrl track={track?.name} artist={track?.artist?.name} />
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
};
