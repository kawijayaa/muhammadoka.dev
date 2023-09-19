import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: 'muhammadoka.dev',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-neutral-800 scrollbar-thumb-rounded-full ${roboto.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
