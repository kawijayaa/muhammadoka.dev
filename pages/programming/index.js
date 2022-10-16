import Head from 'next/head';
import {FaPython} from 'react-icons/fa';

export default function Programming() {
  return (
    <div>
      <Head>
        <title>muhammadoka.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white xxs:px-14 lg:px-10 dark:bg-gray-900">
        <section className="sm:min-h-screen xl:min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex items-center sm:h-screen 3xl:h-[calc(100vh-200px)] xxs:py-10">
            <div>
              <h1 className="xxs:text-4xl xs:text-5xl sm:text-7xl font-semibold xxs:pb-5 xs:pb-10"><span className="text-cyan-500">/</span>programming</h1>
              <p className="xxs:text-sm xs:text-xl">Here is some of my projects over the years. Other projects can be found on my <a href="https://github.com/kawijayaa">github</a>.</p>
              <div>
                <p className="pt-8 xxs:text-xl xs:text-2xl font-semibold">HengkerNgangNgong COMPFEST14 CTF</p>
                <p className="pt-2 xxs:text-sm xs:text-xl">
                  This is a repository including the writeups for my CTF team &quot;HengkerNgangNgong&quot; for the COMPFEST14 CTF.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cheesewaffly/COMPFEST14-CTF-Writeups" className="xxs:text-sm xs:text-md">&gt; Github</a>
              </div>
              <div>
                <div className="pt-8 flex items-center xxs:gap-1 xs:gap-2">
                  <p className="xxs:text-xl xs:text-2xl font-semibold">discord-self-bot</p>
                  <FaPython  className="xxs:text-xl xs:text-3xl"/>
                </div>
                <p className="pt-2 xxs:text-sm xs:text-xl">
                  I made this &quot;bot&quot; as a project from learning about how people spread malwares through Discord.
                  <br></br>
                  Running this code will infringe Discord TOS. I am not responsible for any punishment from Discord.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kawijayaa/discord-self-bot" className="xxs:text-sm xs:text-md">&gt; Github</a>
              </div>
              <div>
                <div className="pt-8 flex items-center xxs:gap-1 xs:gap-2">
                  <p className="xxs:text-xl xs:text-2xl font-semibold">TextToMorse</p>
                  <FaPython  className="xxs:text-xl xs:text-3xl"/>
                </div>
                <p className="pt-2 xxs:text-sm xs:text-xl">
                  This is my first project with Arduino. Type the text in the serial monitor, the lights and speaker will
                  <br></br>
                  turn on and display the message in Morse code.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kawijayaa/TextToMorse" className="xxs:text-sm xs:text-md">&gt; Github</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
