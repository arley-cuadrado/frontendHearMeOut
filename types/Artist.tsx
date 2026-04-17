export interface Artist {
    id: number;
    musicGenre: string;
}

export interface GenderFilterProps {
    artists: Artist[]
    selectedGenre: string | null
    onSelectGenre: (genre: string | null) => void
}