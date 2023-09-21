"use client"

import React from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';
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
    "//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=okeeeeng&api_key=a9010ca43aa2ae6fee2505fe418df0bd&period=1month&format=json&limit=5",
    fetcher,
    { refreshInterval: 15 * 1000 },
  );
  
  const album_list = lfmData?.topalbums?.album;
  
  if (lfmData?.topalbums?.album === undefined) {
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
      <h1 className="text-4xl font-bold">Top Albums</h1>
      <div className="flex flex-col gap-2">
        {album_list?.map(function(album?) {
            console.log(album.image[2]['#text'])
            return (
              <div className="flex items-center gap-6 p-4 rounded-xl bg-neutral-900">
                  <img src={album.image[2]['#text']} alt={album.name} className="w-20 h-20 rounded-xl" />
                  <div>  
                      <a href={album.url} className="text-2xl">{album.name}</a>
                      <p className="text-xl text-neutral-500">{album.artist.name}</p>
                  </div>
              </div>
            )
        })}
      </div>
    </div>
  )
};