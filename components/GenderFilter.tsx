'use client'
import { GenderFilterProps } from '../types/artist'
import { useRef } from "react"

export default function GenderFilter({ artists, selectedGenre, onSelectGenre }: GenderFilterProps) {

    const scrollRef = useRef<HTMLDivElement>(null)

    // Eliminar duplicados
    const genres: string[] = [...new Set(artists.map(a => a.musicGenre))]

    // Funcionalidad botones
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return
        const scrollAmount = 200
        // Efecto
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative">
            <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute left-0 top-4  -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-8 h-8 items-center justify-center"
            >{<strong>{'<'}</strong>}</button>

            {/* Contenedor scroll */}
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto no-scrollbar pb-4 px-8">

                <button
                    onClick={() => onSelectGenre(null)}
                    className={`whitespace-nowrap px-4 py-1.5 text-sm rounded-full font-medium transition
                    ${selectedGenre === null
                            ? "bg-black text-white"
                            : "bg-gray-100 text-black hover:bg-gray-200"
                        }`}
                >
                    All
                </button>

                {genres.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => onSelectGenre(genre)}
                        className={`whitespace-nowrap px-4 py-1.5 text-sm rounded-full font-medium transition
                        ${selectedGenre === genre
                                ? "bg-black text-white"
                                : "bg-gray-100 text-black hover:bg-gray-200"
                            }`}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute right-0 top-4 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-8 h-8 items-center justify-center"
            >{<strong>{'>'}</strong>}</button>
        </div>
    )
}