'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMenu } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="absolute bottom-4 left-0 w-full hidden lg:block">
        <div className="flex justify-center items-center tracking-widest gap-4">
          <a href="/" className='hover:underline'>home</a>
          <a href="/about" className={`${usePathname() === "/about" ? "text-cyan-500 underline" : ""} hover:underline`}>about</a>
          <a href="/projects" className={`${usePathname() === "/projects" ? "text-cyan-500 underline" : ""} hover:underline`}>projects</a>
          <a href="/uses" className={`${usePathname() === "/uses" ? "text-cyan-500 underline" : ""} hover:underline`}>uses</a>
          <a href="/music" className={`${usePathname() === "/music" ? "text-cyan-500 underline" : ""} hover:underline`}>music</a>
          <a href="/socials" className={`${usePathname() === "/socials" ? "text-cyan-500 underline" : ""} hover:underline`}>socials</a>
        </div>
      </nav>
      <div className="fixed flex lg:hidden justify-center items-center bottom-0 w-full py-4 bg-gradient-to-b from-transparent to-stone-950 z-30">
        <IoMenu className="text-4xl" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={`${isOpen ? "flex backdrop-blur-md" : "hidden"} flex-col gap-8 justify-center items-center absolute w-full h-full bg-stone-950 bg-opacity-30 top-0 left-0 z-20 overflow-hidden`}>
        <a href="/" className='tracking-widest'>home</a>
        <a href="/about" className={`${usePathname() === "/about" ? "text-cyan-500 underline" : ""} hover:underline tracking-widest`}>about</a>
        <a href="/projects" className={`${usePathname() === "/projects" ? "text-cyan-500 underline" : ""} hover:underline tracking-widest`}>projects</a>
        <a href="/uses" className={`${usePathname() === "/uses" ? "text-cyan-500 underline" : ""} hover:underline tracking-widest`}>uses</a>
        <a href="/music" className={`${usePathname() === "/music" ? "text-cyan-500 underline" : ""} hover:underline tracking-widest`}>music</a>
        <a href="/socials" className={`${usePathname() === "/socials" ? "text-cyan-500 underline" : ""} hover:underline tracking-widest`}>socials</a>
      </div>
    </>
  );
}
