'use client';

import AlbumCollection from '@/components/AlbumCollection';
import LastFMStatistics from '@/components/LastFMStatistics';

export default function Music() {
  return (
    <div className='min-h-dvh w-dvw p-16 flex flex-col gap-16'>
      <h1 className='text-6xl font-black'>&#47;music</h1>
      <LastFMStatistics />
      <AlbumCollection />
    </div>
  )
}
