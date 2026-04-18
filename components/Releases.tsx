import { useState, useEffect } from "react"
import Link from "next/link"
import { getStrapiImage } from '../lib/utils';

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
      <h1 className="text-3xl md:text-5xl lg:text-7xl mt-16 mb-8 font-bold text-slate-700 dark:text-white">
        Releases
      </h1>

      {artists.slice(0, visibleCount).map((artist) => (
        <article key={artist.id} className="hover:font-bold transition-all duration-300 gap-10 w-auto md:w-auto lg:w-200 border-b border-solid border-gray-200">
          <Link href={`/artists/${artist.slug}`}>
            <section className="flex justify-between pt-4 pb-4 items-center w-auto md:w-auto">
              <div className="pr-8 xs:w-100 sm:w-100 md:w-170 lg:w-200">
                <p className="text-1xl md:text-2xl lg:text-3xl font-bold mb-2 text-slate-700 dark:text-white">{artist.name}</p>
                <p className="text-sm line-clamp-3 mb-5 text-slate-500 dark:text-gray-400">{artist.description}</p>
                <strong className="text-slate-500 dark:text-gray-400">{artist.musicGenre ? `#${artist.musicGenre}` : ''}</strong>
              </div>

              <div className="w-auto md:w-32 h-24 overflow-hidden">
                <img
                  className="w-100 md:w-32 h-full object-cover"
                  src={getStrapiImage(artist.photo?.formats?.small?.url)}
                  alt=""
                />
              </div>
            </section>
          </Link>
        </article>
      ))}

      {visibleCount < artists.length && (
        <p className="text-center py-4">Loading more...</p>
      )}
    </>
  )
}