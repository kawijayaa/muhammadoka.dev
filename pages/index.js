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
        <section className="min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex h-[calc(100vh-200px)] items-center">
            <div>
              <h1 className="text-9xl font-semibold pb-2">hello<span className="text-cyan-500">!</span></h1>
              <p className="text-2xl">
                Telling computers what to do since 2013.
                <br></br>
                Based in Jakarta, ID
              </p>
              <Link href="/about"><a className="text-lg text-gray-400 italic">&gt; more about me</a></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
