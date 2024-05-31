'use client';

import { useState } from "react";
import TechnologiesPage from "./TechnologiesPage";
import SoftwaresPage from "./SoftwaresPage";
import HardwaresPage from "./HardwaresPage";

export default function UsesPage() {
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full gap-8 md:gap-16 p-8">
      <div className="flex justify-center md:justify-start items-center gap-4 w-full md:w-auto">
        <a className="text-cyan-500 text-7xl justify-self-start flex-1 md:flex-none" href="/">&lt;</a>
        <h1 className="flex gap-4 text-5xl font-bold tracking-wide">
          /uses
        </h1>
        <div className="flex-1 md:flex-none"></div>
      </div>
      <div className="flex flex-col gap-4 justify-center md:justify-start">
        <div className="flex text-sm md:text-lg gap-4 justify-center md:justify-end">
          <a onClick={() => setPage(0)} className={`${page === 0 ? 'underline' : ''} cursor-pointer`}>Technologies</a>
          <a onClick={() => setPage(1)} className={`${page === 1 ? 'underline' : ''} cursor-pointer`}>Softwares</a>
          <a onClick={() => setPage(2)} className={`${page === 2 ? 'underline' : ''} cursor-pointer`}>Hardwares</a>
        </div>
        {page === 0 && <TechnologiesPage />}
        {page === 1 && <SoftwaresPage />}
        {page === 2 && <HardwaresPage />}
      </div>
    </div>
  );
}
