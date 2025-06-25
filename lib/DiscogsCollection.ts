import useSWR from 'swr';

type AlbumArtist = {
  name: string,
  anv: string,
  join: string,
  role: string,
  tracks: string,
  id: number,
  resource_url: string
}

type AlbumInformation = {
  id: number,
  master_url: string,
  cover_image: string,
  title: string,
  year: number,
  formats: object[],
  labels: object[],
  artists: AlbumArtist,
  genres: string[],
  styles: string[],
}

export type Album = {
  id: number,
  instance_id: number,
  date_added: string,
  rating: number,
  basic_information: AlbumInformation,
}

type DiscogsResult = {
  pagination: object
  releases: Album[]
}

export function useDiscogsCollection(username: string, limit: number = 0) {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const endpoint = `//api.discogs.com/users/${username}/collection/folders/0/releases?sort=added&sort_order=desc`
  const { data: result } = useSWR<DiscogsResult>(endpoint, fetcher)
  return (limit > 0) ? result?.releases.slice(0, limit) : result?.releases
}
