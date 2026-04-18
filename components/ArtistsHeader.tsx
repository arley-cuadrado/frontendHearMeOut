import { getStrapiImage } from '../lib/utils';

interface dataArtist {
    artist: string;
    releasesTitle: string;
    musicGenre: string;
    photo: {
        formats: {
            small: {
                url: string;
            };
        };
    };
}

interface Props {
    artist: dataArtist;
}

export default function ArtistsHeader({ artist }: Props) {
    return (
        <>
            <header className="bg-black bg-cover bg-center h-100 flex flex-col lg:flex-row items-center gap-8">
                <img
                    className="w-auto lg:w-100 h-full object-cover"
                    src={getStrapiImage(artist.photo?.formats?.small?.url)}
                    alt=""
                />

                <section>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-center uppercase font-bold text-white">
                        {artist.releasesTitle}
                    </h1>
                    <div><strong className="text-white">{artist.musicGenre}</strong></div>
                </section>
            </header>
        </>
    )
}     