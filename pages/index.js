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
        <section className="xxs:min-h-[calc(100vh-60px)] xs:min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-15 xl:px-40 dark:text-white flex xxs:h-[calc(100vh-120px)] xs:h-[calc(100vh-64px)] sm:h-[calc(100vh-200px)] items-center">
            <div>
              <h1 className="xxs:text-6xl xs:text-7xl md:text-9xl font-semibold xxs:pb-2">hello<span className="text-cyan-500">!</span></h1>
              <p className="xxs:text-md xs:text-lg md:text-2xl">
                Telling computers what to do since 2013.
                <br></br>
                Based in Jakarta, ID
              </p>
              <Link href="/about"><a className="xxs:text-sm sm:text-lg text-gray-400 italic">&gt; more about me</a></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
