import useSWR from "swr";
import { TrackAttr, TrackAlbum, TrackImage, TrackDate } from "use-last-fm";

export interface AlbumArtist {
  url: string;
  name: string;
  mbid: string;
}

export interface Album {
  artist: AlbumArtist;
  '@attr'?: TrackAttr;
  mbid: string;
  album: TrackAlbum;
  streamable: string;
  url: string;
  name: string;
  image: TrackImage[];
  date?: TrackDate;
}

export interface Track {
  artist: AlbumArtist;
  '@attr'?: TrackAttr;
  mbid: string;
  album: Album;
  streamable: string;
  url: string;
  name: string;
  image: TrackImage[];
  date?: TrackDate;
}

interface TopAlbums {
  album?: Album[];
}

interface LastFMRecentTracksResponseBody {
  recenttracks: { track: Track[] };
}

interface LastFMTopAlbumResponseBody {
  topalbums: TopAlbums;
}

interface LastFMTopTracksResponseBody {
  toptracks: { track: Track[] };
}

interface LastFMTrackInfoResponseBody {
  track: Track;
}

type Period = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month'

export const LASTFM_PLACEHOLDER_IMAGE = 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'

export function trimSongTitle(title: string) {
  return title.length > 20 ? title.split(/[(|-]/)[0].trim() : title
}

export function useGetTrackImage(title: string, artist: string) {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data: result } = useSWR<LastFMTrackInfoResponseBody>(
    `//ws.audioscrobbler.com/2.0/?method=track.getinfo&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1&track=${encodeURI(title)}&artist=${encodeURI(artist)}&autocorrect=1`,
    fetcher,
  );

  return result?.track.album.image[2]["#text"]
}

export function useGetRecentTracks(username: string, limit: number = 0) {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const endpoint = (limit > 0) ?
    `//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=${limit}&extended=1` :
    `//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&extended=1`
  const { data: result } = useSWR<LastFMRecentTracksResponseBody>(
    endpoint,
    fetcher,
    {
      refreshInterval: 15 * 1000
    },
  );
  return result?.recenttracks.track;
}

export function useGetTopAlbums(username: string, limit: number = 0, period: Period = '1month') {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const endpoint = (limit > 0) ?
    `//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=${limit}&period=${period}` :
    `//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=${period}`
  const { data: result } = useSWR<LastFMTopAlbumResponseBody>(
    endpoint,
    fetcher,
    {
      refreshInterval: 15 * 1000
    },
  );
  return result?.topalbums.album;
}

export function useGetTopTracks(username: string, limit: number = 0, period: Period = '1month') {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const endpoint = (limit > 0) ?
    `//ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=${limit}&extended=1&period=${period}` :
    `//ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=${period}`
  const { data: result } = useSWR<LastFMTopTracksResponseBody>(
    endpoint,
    fetcher,
    {
      refreshInterval: 15 * 1000
    },
  );
  return result?.toptracks.track;
}
