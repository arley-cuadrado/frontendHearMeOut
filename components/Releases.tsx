import { useState, useEffect } from "react"
import Link from "next/link"

interface Artist {
  id: number;
  name: string;
  description: string;
  musicGenre: string;
  slug: string;
  photo: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

export default function Releases({ artists }: { artists: Artist[] }) {

  const [visibleCount, setVisibleCount] = useState(2)

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) => prev + 2)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <h1 className="text-7xl mb-6 font-bold text-gray-700">
        Releases
      </h1>

      {artists.slice(0, visibleCount).map((artist) => (
        <article key={artist.id} className="grid hover:font-bold transition-all duration-300 w-200">
          <Link href={`/artists/${artist.slug}`}>
            <section className="flex bg-white pb-4 items-center">
              <div className="pr-8">
                <p className="text-3xl text-gray-600 font-bold mb-2">{artist.name}</p>
                <p className="text-sm line-clamp-3 text-gray-500 mb-5 w-160">{artist.description}</p>
                <strong>{artist.musicGenre ? `#${artist.musicGenre}` : ''}</strong>
              </div>

              <div className="h-24 overflow-hidden">
                <img
                  className="w-32 h-full object-cover"
                  src={`http://localhost:1337${artist.photo.formats.small.url}`}
                  alt=""
                />
              </div>
            </section>
          </Link>

          <hr className="my-4 border-t border-gray-200" />
        </article>
      ))}

      {visibleCount < artists.length && (
        <p className="text-center py-4">Loading more...</p>
      )}
    </>
  )
}