export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen md:h-full gap-8 md:gap-16 p-8">
      <div className="flex justify-center md:justify-start items-center gap-4 w-full md:w-auto">
        <a className="text-cyan-500 text-7xl justify-self-start flex-1 md:flex-none" href="/">&lt;</a>
        <h1 className="flex gap-4 text-5xl font-bold tracking-wide">
          /about
        </h1>
        <div className="flex-1 md:flex-none"></div>
      </div>
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
        <p className="md:text-lg">
          currently a network, security and operating systems lead @
          <a href="https://ristek.cs.ui.ac.id/" target="_blank" rel="noreferrer" className="text-cyan-500"> RISTEK</a> and
          capture-the-flag vice person-in-charge @
          <a href="https://compfest.id/" target="_blank" rel="noreferrer" className="text-cyan-500"> COMPFEST16</a>.
        </p>
      </div>
    </div>
  );
}
