"use client"

export default function GenderFilter({ artists, selectedGenre, onSelectGenre }: {
    artists: any[]
    selectedGenre: string | null
    onSelectGenre: (genre: string | null) => void
}) {

    // Quitar duplicados
    const genres = [...new Set(artists.map(a => a.musicGenre))]

    return (
        <section className="flex flex-wrap gap-4 pb-8">

            {/* Botón reset */}
            <button
                onClick={() => onSelectGenre(null)}
                className={`px-4 py-2 rounded-full transition
                        ${onSelectGenre === null
                        ? "bg-black text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
            >
                All
            </button>

            {genres.map((genre: string, index: number) => (
                <button
                    key={index}
                    onClick={() => onSelectGenre(genre)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full transition
                    ${selectedGenre === genre
                            ? "bg-black text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    {genre}
                </button>
            ))}
        </section>
    )
}