//"use client"

interface Artist {
    id: number;
    artist: string;
    releasesTitle: string;
    musicGenre: string;
}
interface GenderFilterProps {
    artists: Artist[];
    selectedGenre: string | null;
    onSelectGenre: (genre: string | null) => void;
}

export default function GenderFilter({ artists, selectedGenre, onSelectGenre }: GenderFilterProps) {

    // Eliminar duplicados
    const genres = [...new Set(artists.map(a => a.musicGenre))]

    return (
        <section className="flex flex-wrap gap-4 pb-8">

            {/* Botón reset */}
            <button
                onClick={() => onSelectGenre(null)}
                className={`px-4 py-2 rounded-full transition
                ${selectedGenre === null
                        ? "bg-black text-white"
                        : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    }`}
            >
                All
            </button>

            {genres.map((genre, index) => (
                <button
                    key={index}
                    onClick={() => onSelectGenre(genre)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full transition
                    ${selectedGenre === genre
                            ? "bg-black text-white"
                            : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        }`}
                >
                    {genre}
                </button>
            ))}
        </section>
    )
}