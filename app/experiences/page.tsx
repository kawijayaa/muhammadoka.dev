import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { SiLinkedin } from "react-icons/si";

export default function Experiences() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen md:h-full gap-8 md:gap-16 py-16 md:py-8 p-8">
      <Navbar />
      <Title title="experiences" />
      <div className="md:w-1/2 flex flex-col gap-4">
        <div>
          <p className="text-gray-300">Jan 2024 - Present</p>
          <h1 className="text-xl font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2 text-balance">Lead of Network, Security and Operating Systems SIG</h1>
          <ul className="list-disc list-inside">
            <li>Delivered materials about Forensics in CTF in an internal class program. Topics delivered includes packet capture and analysis using Wireshark and memory forensics analysis using Volatility3.</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-300">Nov 2023 - Present</p>
          <h1 className="text-xl font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2 text-balance">Vice Person-in-Charge CTF COMPFEST16</h1>
          <ul className="list-disc list-inside">
            <li>Managed a 12-man team of Scientific Committees, Technical Committee and Administrators, each responsible for developing problem-sets, deploying and maintaining the competition infrastructure, and managing participants administrational needs, to ensure smooth operations of the competition.</li>
            <li>Managed the competition infrastructure, including the platform and challenge cloud instances and their respective services.</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-300">Jan 2024 - Jun 2024</p>
          <h1 className="text-xl font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2 text-balance">Teaching Assistant of Programming Foundations 2</h1>
          <ul className="list-disc list-inside">
            <li>Led lab sessions with three other teaching assistants for students to enhance their programming skills through hands-on practice.</li>
            <li>Provided mentorship to 10 students, helping them with assignments and labs throughout the course.</li>
            <li>Assisted the lecturer in releasing and grading 10 labs and 4 assignments, ensuring a smooth learning experience.</li>
          </ul>
        </div>
        <a href="https://www.linkedin.com/in/muhammadoka/" target="_blank" rel="noreferrer" className="self-center md:self-start">
          <div className="flex items-center gap-2 hover:underline hover:text-cyan-500">
            <SiLinkedin className="h-8 w-8 text-white" />
            <p>more on linkedin</p>
          </div>
        </a>
      </div>
    </div>
  );
}
