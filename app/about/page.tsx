import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen md:h-full gap-8 md:gap-16 py-16 md:py-8 p-8">
      <Navbar />
      <Title title="about" />
      <div className="md:w-1/2 flex flex-col gap-4">
        <p className="md:text-lg">
          Hello 👋! My name is <span className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">Muhammad Oka</span>. Currently a third-year double-degree computer science student @
          <span> </span>
          <a href="https://cs.ui.ac.id/" target="_blank" rel="noreferrer" className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">Universitas Indonesia</a>.
          My journey into computer science began in first grade elementary when I joined the school&apos;s robotics club,
          igniting a lifelong curiosity for technology.
        </p>
        <p className="md:text-lg">
          Outside of academic obligations, I do side-projects as a playground to solidify my understanding in computer
          science and explore new technologies. Some topics I am currently interested are <span> </span>
          <span className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">cybersecurity</span>,
          <span> </span>
          <span className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">devops</span>,
          <span> </span>
          <span className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">computer networks</span>,
          <span> </span>
          <span className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">programming languages</span>, and
          <span> </span>
          <span className="font-bold underline decoration-dashed decoration-cyan-500 underline-offset-2">backend engineering</span>.
          I also like to participate in capture-the-flag competitions from time to time to
          apply my cybersecurity skills.
        </p>
        <p className="md:text-lg">
          Beyond computer science, I am a car-guy and also enjoy motorcycles. Music is also one of my longest hobbies,
          listening to broad ranges of genres from jazz-fusion to metal to bedroom pop, and playing the piano and guitar for fun.
        </p>
      </div>
    </div>
  );
}
