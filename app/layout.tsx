import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "muhammadoka",
  description: "Passionate cyber security student based in Brisbane, Australia. Interested in Cyber Security, Cloud Infrastructure, and Web Development. Plays capture-the-flag competitions, solving Forensics and Web exploitation challenges.",
  keywords: ['cyber security', 'cloud', 'cloud infrastructure', 'web development', 'capture the flag', 'forensics', 'web exploitation', 'ctf', 'muhammad oka'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-950 bg-[linear-gradient(to_right,#57534e05_2px,transparent_2px),linear-gradient(to_bottom,#57534e05_2px,transparent_2px)] bg-[size:36px_36px]">
      <head>
        <title>muhammadoka</title>
      </head>
      <body className={`${font.className} text-white overflow-x-hidden`}>
        {children}
      </body>
    </html >
  );
}
