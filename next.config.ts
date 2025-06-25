import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://i.discogs.com/**'),
      new URL('https://lastfm.freetls.fastly.net/i/u/**'),
    ]
  }
};

export default nextConfig;
