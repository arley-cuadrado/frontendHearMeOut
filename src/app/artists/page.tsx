import Releases from "../../../components/Releases";
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
            <section>
                <section className="grid grid-cols-[75%_25%]">
                    <main className="border-r border-gray-100">
                        <ArtistsClient artists={artists} />
                    </main>
                    <Aside />
                </section>
            </section>
        </>
    )
}