'use client';

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Kepo2023 from "./pages/Kepo2023";
import Tujulangitstudio from "./pages/Tujulangitstudio";
import CekSIAK from "./pages/CekSIAK";
import Goturing from "./pages/Goturing";
import { useState } from "react";

export default function Projects() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-full gap-8 md:gap-16 py-16 md:py-8 p-8">
      <Navbar />
      <Title title="projects" />
      <div className="flex flex-col gap-4 justify-center md:justify-start px-4 md:px-0">
        <div className="flex text-sm md:text-lg gap-4 justify-center md:justify-end items-center">
          <a onClick={() => setPage(0)} className={`${page === 0 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>kepo 2023</a>
          <a onClick={() => setPage(1)} className={`${page === 1 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>tujulangitstudio</a>
          <a onClick={() => setPage(2)} className={`${page === 2 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>ceksiak</a>
          <a onClick={() => setPage(3)} className={`${page === 3 ? 'underline text-cyan-500' : ''} hover:underline cursor-pointer`}>goturing</a>
        </div>
        {page === 0 && <Kepo2023 />}
        {page === 1 && <Tujulangitstudio />}
        {page === 2 && <CekSIAK />}
        {page === 3 && <Goturing />}
      </div>
    </div>
  );
}
