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

    console.log('LOS ARTISTASSSSS: ', artist)
    return (
        <>
            <header className="bg-black bg-cover bg-center h-100 flex items-center ">{/* bg-[url('/images/hero.jpeg')] */}
                <img
                    className="w-100 h-full object-cover"
                    src={`http://localhost:1337${artist.photo?.formats?.small?.url}`}
                    alt=""
                />
                <section>
                    <h1 className="text-5xl text-center uppercase font-bold text-white">
                        {artist.releasesTitle}
                    </h1>
                    <div><strong className="text-white">{artist.musicGenre}</strong></div>
                </section>
            </header>
        </>
    )
}     