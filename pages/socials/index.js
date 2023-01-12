import Head from 'next/head';
import {AiFillMail, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

export default function Socials() {
  return (
    <div>
      <Head>
        <title>muhammadoka.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="xxs:min-h-[calc(100vh-60px)] xl:min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex xxs:h-[calc(100vh-60px)] xl:h-[calc(100vh-100px)] items-center">
            <div>
              <h1 className="xxs:text-6xl xs:text-8xl font-semibold pb-5"><span className="text-cyan-500">/</span>socials</h1>
              <p className="xxs:text-lg xs:text-xl">This is where you can contact me for questions or business enquiries.</p>
                <ul className="xxs:text-3xl xs:text-4xl flex xxs:gap-3 xs:gap-10 xxs:py-2 xs:py-5">
                    <li className="py-2">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:oka@muhammadoka.dev"><AiFillMail /></a>
                    </li>
                    <li className="py-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-oka-b5512b220/"><AiFillLinkedin /></a>
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
