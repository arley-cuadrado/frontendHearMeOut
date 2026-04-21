/* eslint-disable @next/next/no-img-element */
import { getStrapiImage } from '../lib/utils';

interface dataArtist {
    artist?: string;
    name?: string;
    releasesTitle?: string;
    musicGenre?: string;
    photo?: {
        url?: string;
        formats?: {
            thumbnail?: { url: string };
            small?: { url: string };
            medium?: { url: string };
        };
    };
}

interface Props {
    artist: dataArtist;
}

export default function ArtistsHeader({ artist }: Props) {
    const artistPhotoUrl =
        artist.photo?.formats?.small?.url ||
        artist.photo?.formats?.medium?.url ||
        artist.photo?.formats?.thumbnail?.url ||
        artist.photo?.url

    const artistImage = getStrapiImage(artistPhotoUrl) || "/images/hero.jpeg"
    const artistName = artist.releasesTitle || artist.name || artist.artist || "Artist"

    return (
        <>
            <header className="bg-black bg-cover bg-center h-100 flex flex-col lg:flex-row items-center gap-8">
                <img
                    className="w-auto lg:w-100 h-full object-cover"
                    src={artistImage}
                    alt={artistName}
                />

                <section>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl uppercase font-bold text-white">
                        {artist.releasesTitle}
                    </h1>
                    <div><strong className="text-white">{artist.musicGenre}</strong></div>
                </section>
            </header>
        </>
    )
}     
