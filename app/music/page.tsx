'use client';

import { RecentlyPlayedTracks } from "../components/music/RecentlyPlayedTracks";
import { TopAlbums } from "../components/music/TopAlbums";
import { TopTracks } from "../components/music/TopTracks";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useState } from "react";

export default function MusicPage() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-full gap-4 md:gap-16 p-8">
      <Navbar />
      <Title title="music" />
      <div className="flex flex-col gap-4 justify-center md:justify-start">
        <div className="flex text-sm md:text-lg gap-4 justify-center md:justify-end">
          <a onClick={() => setPage(0)} className={`${page === 0 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer text-center sm:text-left`}>recently played</a>
          <a onClick={() => setPage(1)} className={`${page === 1 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer text-center sm:text-left`}>top albums</a>
          <a onClick={() => setPage(2)} className={`${page === 2 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer text-center sm:text-left`}>top tracks</a>
        </div>
        {page === 0 && <RecentlyPlayedTracks />}
        {page === 1 && <TopAlbums />}
        {page === 2 && <TopTracks />}
        <a href="https://last.fm/user/okeeeeng" className="text-center md:text-right text-sm hover:underline hover:text-cyan-500 cursor-pointer" target="_blank">
          more on last.fm
        </a>
      </div>
    </div>
  );
}
