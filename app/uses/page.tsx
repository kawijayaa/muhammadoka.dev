'use client';

import { useState } from "react";
import TechnologiesPage from "./pages/TechnologiesPage";
import SoftwaresPage from "./pages/SoftwaresPage";
import HardwaresPage from "./pages/HardwaresPage";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function UsesPage() {
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-full gap-8 md:gap-16 p-8">
      <Navbar />
      <Title title="uses" />
      <div className="flex flex-col gap-4 justify-center md:justify-start px-4 md:px-0">
        <div className="flex text-sm md:text-lg gap-4 justify-center md:justify-end">
          <a onClick={() => setPage(0)} className={`${page === 0 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>technologies</a>
          <a onClick={() => setPage(1)} className={`${page === 1 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>softwares</a>
          <a onClick={() => setPage(2)} className={`${page === 2 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>hardwares</a>
        </div>
        {page === 0 && <TechnologiesPage />}
        {page === 1 && <SoftwaresPage />}
        {page === 2 && <HardwaresPage />}
      </div>
    </div>
  );
}
