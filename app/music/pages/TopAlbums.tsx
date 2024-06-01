"use client"

import React from 'react';
import useSWR from 'swr';
import { TrackAttr, TrackAlbum, TrackImage, TrackDate } from 'use-last-fm';
import Image from 'next/image';

export interface AlbumArtist {
  url: string;
  name: string;
  mbid: string;
}

export interface Album {
  artist: AlbumArtist;
  '@attr'?: TrackAttr;
  mbid: string;
  album: TrackAlbum;
  streamable: string;
  url: string;
  name: string;
  image: TrackImage[];
  date?: TrackDate;
}

export interface TopAlbums {
  album?: Album[];
}

export interface LastFMResponseBody {
  topalbums: TopAlbums;
}

export const TopAlbums = () => {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: lfmData = null } = useSWR<LastFMResponseBody>(
    `//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=okeeeeng&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=1month&limit=5`,
    fetcher,
    { refreshInterval: 15 * 1000 },
  );

  const album_list = lfmData?.topalbums?.album;

  return (
    <div className="flex flex-col gap-2 md:text-right">
      {album_list?.map(function(album?, index?) {
        return (
          <div className="flex flex-row-reverse md:flex-row items-center justify-end py-2 px-4 md:pr-8 gap-4" key={`album_${index}`}>
            <div className="flex flex-col gap-1 pl-8 md:pl-0">
              <a href={album?.url} className="text-md md:text-xl" target="_blank" rel="noreferrer">{album?.name}</a>
              <a href={album?.artist?.url} className="text-sm" target="_blank" rel="noreferrer">{album?.artist?.name}</a>
            </div>
            <a href={album?.url} target="_blank" rel="noreferrer">
              <div className="w-16 h-16 relative">
                <div className="absolute top-0 left-1/2 w-full h-full bg-black rounded-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-white rounded-full"></div>
                </div>
                <Image src={album?.image[2]?.['#text'] ? album?.image[2]?.['#text'] : ''} alt={album?.name ? album?.name : ''} fill />
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
};
