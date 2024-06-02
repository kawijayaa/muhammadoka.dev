import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { FaLastfm } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Socials() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-full gap-8 md:gap-16 p-8">
      <Navbar />
      <Title title="socials" />
      <div className="flex flex-col gap-4 justify-center md:justify-start px-4 md:px-0">
        <a href="https://www.instagram.com/kawijayaa/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:underline hover:text-cyan-500">
          <SiInstagram className="h-12 w-12 text-white" />
          <p className="text-xl">@kawijayaa</p>
        </a>
        <a href="https://www.linkedin.com/in/muhammadoka/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:underline hover:text-cyan-500">
          <SiLinkedin className="h-12 w-12 text-white" />
          <p className="text-xl">in/muhammadoka</p>
        </a>
        <a href="https://github.com/kawijayaa" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:underline hover:text-cyan-500">
          <SiGithub className="h-12 w-12 text-white" />
          <p className="text-xl">kawijayaa</p>
        </a>
        <a href="https://last.fm/user/okeeeeng" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:underline hover:text-cyan-500">
          <FaLastfm className="h-12 w-12 text-white" />
          <p className="text-xl">okeeeeng</p>
        </a>
      </div>
    </div>
  );
}
