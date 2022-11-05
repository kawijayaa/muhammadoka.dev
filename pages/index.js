import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>muhammadoka.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="xxs:min-h-[calc(100vh-60px)] xs:min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-15 xl:px-40 dark:text-white flex xxs:h-[calc(100vh-120px)] xs:h-[calc(100vh-200px)] items-center">
            <div>
              <h1 className="xxs:text-6xl xs:text-9xl font-semibold pb-2">hello<span className="text-cyan-500">!</span></h1>
              <p className="xxs:text-md xs:text-2xl">
                Telling computers what to do since 2013.
                <br></br>
                Based in Jakarta, ID
              </p>
              <p className="pt-1 text-[0.75rem] text-gray-400">(ps: this website is not optimized (yet) for anything other than for desktop.)</p>
              <Link href="/about"><a className="xs:text-sm xs:text-lg text-gray-400 italic">&gt; more about me</a></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
