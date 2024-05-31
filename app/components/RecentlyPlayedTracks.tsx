"use client"

import useSWR from 'swr';
import { LastFMResponseBody } from 'use-last-fm';

export const RecentlyPlayedTracks = () => {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: lfmData = null } = useSWR<LastFMResponseBody>(
    `//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=okeeeeng&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=5&extended=1`,
    fetcher,
    { refreshInterval: 15 * 1000 },
  );

  const trackList = lfmData?.recenttracks?.track;
  let hasNowPlaying = false;

  return (
    <div className="flex flex-col gap-2 md:text-right">
      {trackList?.map(function(track?: any, index?) {
        let nowPlaying = track?.['@attr']?.nowplaying === "true";
        let songName = track?.name.split(/[(|-]/)[0].trim()
        if (hasNowPlaying && index === 5) {
          return null;
        }

        if (nowPlaying) {
          hasNowPlaying = true;
        }

        return (
          <div className={`flex flex-row-reverse md:flex-row items-center justify-end py-2 px-4 gap-4 ${nowPlaying ? 'border-2 border-gray-200 rounded-xl' : ''}`} key={index}>
            <div className="flex flex-col gap-1">
              <a href={track?.url} className="text-md md:text-xl flex-none" target="_blank" rel="noreferrer">{songName}</a>
              <a href={track?.artist?.url} className="text-sm" target="_blank" rel="noreferrer">{track?.artist?.name}</a>
            </div>
            <a href={track?.url} target="_blank" rel="noreferrer">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 bg-black rounded-full z-10"></div>
                <img src={track?.image[2]?.['#text']} alt={track?.name} className={`w-16 ${nowPlaying ? 'animate-[spin_3s_linear_infinite]' : ''} rounded-full`}></img>
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
};
