import Head from 'next/head';
import { FaInstagram } from 'react-icons/fa';

export default function OSF() {
  return (
    <div>
      <Head>
        <title>muhammadoka.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="xxs:min-h-screen xxs:py-10 xl:min-h-[calc(100vh-100px)]">
          <div className="text-black sm:px-10 md:px-40 dark:text-white flex items-center">
            <div>
                <div className="flex items-center xxs:gap-3 lg:gap-5">
                    <h1 className="xxs:text-5xl xs:text-6xl sm:text-7xl font-semibold xxs:pb-2 xs:pb-5"><span className="text-cyan-500">/</span>osf</h1>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/okengsukafoto"><FaInstagram className="xxs:text-3xl lg:text-4xl"/></a>
                </div>
              <p className="xxs:text-md xs:text-xl">okengsukafoto is a pandemic-born project focusing mainly on automotive photography. Currently on hiatus.</p>
              <div className="grid xxs:grid-cols-2 lg:grid-cols-3 xxs:pt-5 lg:pt-10">
                <img src="img/osf-1.jpg"></img>
                <img src="img/osf-9.jpg"></img>
                <img src="img/osf-8.jpg"></img>
                <img src="img/osf-5.jpg"></img>
                <img src="img/osf-6.jpg"></img>
                <img src="img/osf-4.jpg"></img>
                <img src="img/osf-16.jpg"></img>
                <img src="img/osf-3.jpg"></img>
                <img src="img/osf-12.jpg"></img>
                <img src="img/osf-21.jpg"></img>
                <img src="img/osf-2.jpg"></img>
                <img src="img/osf-20.jpg"></img>
                <img src="img/osf-18.jpg"></img>
                <img src="img/osf-22.jpg"></img>
                <img src="img/osf-14.jpg"></img>
                <img src="img/osf-17.jpg"></img>
                <img src="img/osf-7.jpg"></img>
                <img src="img/osf-13.jpg"></img>
                <img src="img/osf-11.jpg"></img>
                <img src="img/osf-19.jpg"></img>
                <img src="img/osf-10.jpg"></img>
                <img src="img/osf-15.jpg"></img>
                <img src="img/osf-23.jpg"></img>
                <img src="img/osf-24.jpg"></img>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
