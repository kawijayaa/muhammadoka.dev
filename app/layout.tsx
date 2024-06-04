import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["300", "500", "700"], subsets: ["latin"] });

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
    <html lang="en" className="bg-stone-900">
      <head>
        <title>muhammadoka</title>
      </head>
      <body className={`${poppins.className} bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 to-stone-900 to-75% text-white h-dvh flex flex-col relative`}>
        <div className="w-full h-full absolute flex justify-center items-center blur-3xl overflow-hidden">
          <div className="w-64 h-64 bg-purple-900 rounded-full animate-blob animation-delay-2000 mix-blend-screen absolute left-1/2"></div>
          <div className="w-64 h-64 bg-cyan-900 rounded-full animate-blob mix-blend-screen absolute"></div>
          <div className="w-64 h-64 bg-emerald-900 rounded-full animate-blob animation-delay-5000 mix-blend-screen absolute left-1/3"></div>
        </div>
        <div className="w-full h-full z-50">
          {children}
        </div>
      </body>
    </html >
  );
}
