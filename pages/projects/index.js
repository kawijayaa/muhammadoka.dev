import Head from 'next/head';
import {FaPython, FaReact} from 'react-icons/fa';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>muhammadoka.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="xxs:min-h-screen xxs:py-10 lg:py-0 xl:min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex xxs:h-screen xl:h-[calc(100vh-150px)] items-center">
            <div>
              <h1 className="xxs:text-5xl xs:text-6xl sm:text-7xl font-semibold xxs:pb-5 xs:pb-10"><span className="text-cyan-500">/</span>projects</h1>
              <p className="xxs:text-md xs:text-xl">Here is some of my projects over the years. Most of them are programming projects, but I have<br></br>miscellaneous projects in the works.</p>
              <div>
                <p className="pt-8 xxs:text-2xl xs:text-2xl font-semibold">HengkerNgangNgong</p>
                <p className="pt-2 xxs:text-md xs:text-xl">
                  This is a repository containing writeups for my CTF team &quot;HengkerNgangNgong&quot;.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kawijayaa/HengkerNgangNgong" className="xxs:text-sm xs:text-md">&gt; Github</a>
              </div>
              <div>
                <p className="pt-8 xxs:text-2xl xs:text-2xl font-semibold">okengsukafoto</p>
                <p className="pt-2 xxs:text-md xs:text-xl">
                  My motorcycle photography project. Started in 2020 as a boredom cure when the pandemic hits.
                </p>
                <a href="/osf" className="xxs:text-sm xs:text-md">&gt; Gallery</a>
              </div>
              <div>
                <div className="pt-8 flex items-center xxs:gap-1 xs:gap-2">
                  <p className="xxs:text-2xl xs:text-2xl font-semibold">kawijayaa.me</p>
                  <FaReact className="xxs:text-xl xs:text-3xl"/>
                </div>
                <p className="pt-2 xxs:text-md xs:text-xl">
                  This version of my personal website is the result of my journey learning React and Next.JS.
                  <br></br>
                  The old version of this website is made using Vue. You can see the source code in the link below.
                </p>
                <div className="pt-1 flex items-center xxs:gap-3 xs:gap-2">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/kawijayaa/my_website" className="xxs:text-sm xs:text-md">&gt; Github</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/kawijayaa/kawijayaa_vue" className="xxs:text-sm xs:text-md">&gt; Github (old version)</a>
                </div>
              </div>
              <div>
                <div className="pt-8 flex items-center xxs:gap-1 xs:gap-2">
                  <p className="xxs:text-2xl xs:text-2xl font-semibold">CTF_Flag_Checker</p>
                  <FaPython  className="xxs:text-xl xs:text-3xl"/>
                </div>
                <p className="pt-2 xxs:text-md xs:text-xl">
                  A library/infrastructure thingy using MongoDB and Python for generating, storing, and checking CTF Flags.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kawijayaa/CTF_Flag_Checker" className="xxs:text-sm xs:text-md">&gt; Github</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
