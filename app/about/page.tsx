import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen md:h-full gap-8 md:gap-16 py-16 md:py-8 p-8">
      <Navbar />
      <Title title="about" />
      <div className="md:w-1/2 flex flex-col gap-4">
        <p className="md:text-lg">
          hello 👋! my name is muhammad <span className="text-cyan-500">oka</span>. currently a third year computer science student @
          <a href="https://cs.ui.ac.id/" target="_blank" rel="noreferrer" className="text-cyan-500"> Universitas Indonesia</a>.
          my journey into computer science began in first grade elementary when i joined the school&apos;s robotics club,
          igniting a lifelong curiosity for technology.
        </p>
        <p className="md:text-lg">
          outside of academic obligations, i do side-projects as a playground to solidify my understanding in computer
          science and explore new technologies. some topics i am currently interested are
          <span className="text-cyan-500"> cybersecurity</span>,
          <span className="text-cyan-500"> devops</span>,
          <span className="text-cyan-500"> computer networks</span>,
          <span className="text-cyan-500"> programming languages</span>, and
          <span className="text-cyan-500"> backend engineering</span>.
          i also like to participate in capture-the-flag competitions from time to time to
          apply my cybersecurity skills.
        </p>
        <p className="md:text-lg">
          beyond computer science, i am a car-guy and also enjoy motorcycles. music is also one of my longest hobbies,
          listening to broad ranges of genres from jazz-fusion to metal to bedroom pop, and playing the piano and guitar for fun.
        </p>
      </div>
    </div>
  );
}
