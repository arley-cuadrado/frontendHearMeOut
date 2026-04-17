"use client"

import { useState } from "react"
import GenderFilter from "./GenderFilter"
import Releases from "./Releases"

export interface Artist {
    id: number
    name: string
    description: string
    musicGenre: string
    slug: string
    photo: {
        formats: {
            small: {
                url: string
            }
        }
    }
}

export default function ArtistsClient({ artists }: { artists: Artist[] }) {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

    const filteredArtists = selectedGenre
        ? artists.filter((a) => a.musicGenre === selectedGenre)
        : artists

    return (
        <>
            <GenderFilter
                artists={artists}
                selectedGenre={selectedGenre}
                onSelectGenre={setSelectedGenre}
            />
            <Releases artists={filteredArtists} />
        </>
    )
}