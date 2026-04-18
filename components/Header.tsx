//'use client'

interface dataArtist {
    artist: string;
}

export default function Header(artist: dataArtist) {

    return (
        <>
            <header className="bg-[url('/images/hero.jpeg')] bg-cover bg-center h-100 w-full flex items-center flex-col justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-center uppercase font-bold text-white">
                    New album OUT NOW- <br />
                    {artist.artist}
                </h1>
            </header>
        </>
    )
}