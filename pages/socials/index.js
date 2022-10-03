import Head from 'next/head';
import {AiFillMail, AiFillGithub, AiFillInstagram} from 'react-icons/ai';

export default function Socials() {
  return (
    <div>
      <Head>
        <title>muhammad oka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex h-[calc(100vh-200px)] items-center">
            <div>
              <h1 className="text-8xl font-semibold pb-5"><span className="text-cyan-500">/</span>socials</h1>
              <p className="text-xl">This is where you can contact me for questions or business enquiries.</p>
                <ul className="text-4xl flex gap-10 py-5">
                    <li className="py-2">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:me@kawijayaa.me"><AiFillMail /></a>
                    </li>
                    <li className="py-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://github.com/kawijayaa"><AiFillGithub /></a>
                    </li>
                    <li className="py-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/kawijayaa"><AiFillInstagram /></a>
                    </li>
                </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
