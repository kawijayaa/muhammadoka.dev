"use client"

import React from 'react';
import useSWR from 'swr';
import { CgSpinnerAlt } from 'react-icons/cg';
import { LastFMResponseBody } from 'use-last-fm';

export const RecentlyPlayed = () => {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: lfmData = null } = useSWR<LastFMResponseBody>(
    "//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=okeeeeng&api_key=a9010ca43aa2ae6fee2505fe418df0bd&format=json&limit=5",
    fetcher,
    { refreshInterval: 15 * 1000 },
  );
  
  const track_list = lfmData?.recenttracks?.track;
  
  if (lfmData?.recenttracks?.track === undefined) {
    return (
      <>
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-5xl animate-spin text-neutral-500">
            <CgSpinnerAlt />
          </p>
        </div>
      </>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Recently Played</h1>
      <div className="flex flex-col gap-2">
        {track_list?.map(function(track?) {
            let song_name = track.name
            return (
              <div key={track.mbid} className={"flex items-center gap-6 p-4 rounded-xl bg-neutral-900 " + (track['@attr']?.nowplaying ? 'border-4 drop-shadow-[0_5px_5px_rgb(255,255,255,0.25)] transition-all' : '')}>
                  <img src={track.image[2]['#text']} alt={track.name} className={"w-20 h-20 " + (track['@attr']?.nowplaying ? 'rounded-full animate-spin-slow' : 'rounded-xl')} />
                  <div>  
                      <a href={track.url} className="text-2xl">{song_name}</a>
                      <p className="text-xl text-neutral-500">{track.artist['#text']}</p>
                  </div>
              </div>
            )
        })}
      </div>
    </div>
  )
};