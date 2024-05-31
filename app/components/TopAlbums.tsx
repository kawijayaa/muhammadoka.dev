"use client"

import React from 'react';
import useSWR from 'swr';
import { TrackAttr, TrackAlbum, TrackImage, TrackDate } from 'use-last-fm';

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
          <div className="flex flex-row-reverse md:flex-row items-center justify-end py-2 px-4 gap-4" key={`album_${index}`}>
            <div className="flex flex-col gap-1">
              <a href={album?.url} className="text-md md:text-xl" target="_blank" rel="noreferrer">{album?.name}</a>
              <a href={album?.artist?.url} className="text-sm" target="_blank" rel="noreferrer">{album?.artist?.name}</a>
            </div>
            <a href={album?.url} target="_blank" rel="noreferrer">
              <img src={album?.image[2]?.['#text']} alt={album?.name} className="w-16 rounded-sm" />
            </a>
          </div>
        )
      })}
    </div>
  )
};
