import { useDiscogsCollection, Album } from "@/lib/DiscogsCollection"
import Image from "next/image"

export default function AlbumCollection() {
  const albums = useDiscogsCollection('okeeeeng', 9)

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-4xl font-bold">Vinyl Collection</p>
        <a href="https://www.discogs.com/user/okeeeeng" target="_blank" className="text-neutral-500">more on Discogs</a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {albums?.map((album: Album) => (
          <div key={album.basic_information.id} className="flex flex-col items-center gap-2">
            <Image src={album.basic_information.cover_image} alt={album.basic_information.title} width={250} height={250} />
          </div>
        ))}
      </div>
    </div>
  )
}
