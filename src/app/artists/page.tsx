import Aside from "../../../components/Aside";
import ArtistsClient from "../../../components/ArtistClient";

async function getAllArtists() {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    console.log('AJA, QUE PASO CONTIGO? ')

    if (!baseUrl) {
        console.error("Missing STRAPI URL");
        return [];
    }

    try {
        const res = await fetch(`${baseUrl}/api/artists?populate=*`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            console.error("Failed to fetch artists:", res.status);
            return [];
        }

        const data = await res.json();
        return data?.data || [];

    } catch (err) {
        console.error("Fetch artists crashed:", err);
        return [];
    }
}

export default async function Artists() {
    const artists = await getAllArtists();

    if (!artists || artists.length === 0) {
        return <p>No artists available</p>;
    }

    return (
        <section className="flex flex-col lg:flex-row gap-24">
            <main className="pr-0 lg:pr-16 xs:w-auto sm:w-auto md:w-auto lg:w-200">
                <ArtistsClient artists={artists} />
            </main>
            <Aside />
        </section>
    );
}