import Aside from "../../../components/Aside";
import ArtistsClient from "../../../components/ArtistClient";

async function getAllArtists() {
    const artistsPromise = await fetch("http://localhost:1337/api/artists?populate=*")
    const artists = await artistsPromise.json()
    return artists.data
}

export default async function Artists() {
    const artists = await getAllArtists()

    return (
        <>
            <section className="flex flex-col lg:flex-row gap-24">
                <main className="pr-0 lg:pr-16 xs:w-auto sm:w-auto md:w-auto lg:w-200">
                    <ArtistsClient artists={artists} />
                </main>
                <Aside />
            </section>
        </>
    )
}