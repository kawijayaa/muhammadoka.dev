"use client"

import { useLastFM } from "use-last-fm";

export default function NowPlaying() {
    const lastFM = useLastFM('okeeeeng', 'a9010ca43aa2ae6fee2505fe418df0bd');

    if (lastFM.status !== 'playing') {
        return (<div></div>)
    }

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-xl">now playing</h1>
            <div className="flex gap-6 bg-black text-white p-3 pr-6 rounded-xl h-20 w-max">
                <img src={lastFM.song?.art} className="h-full w-auto rounded-full animate-spin-slow"></img>
                <div className="flex flex-col self-center">
                    <a href={lastFM.song.url} className="text-xl">{lastFM.song.name}</a>
                    <p className="text-neutral-500">{lastFM.song.artist}</p>
                </div>
            </div>
        </div>
    )
}