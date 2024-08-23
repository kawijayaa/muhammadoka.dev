import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "muhammadoka.dev",
  description: "telling computers what to do since 2012.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-950">
      <head>
        <title>muhammadoka</title>
      </head>
      <body className={`${font.className} text-white h-dvh flex flex-col relative`}>
        <div className="w-full h-full z-50">
          {children}
        </div>
      </body>
    </html >
  );
}
