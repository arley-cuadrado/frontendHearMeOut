import qs from "qs";

interface DetailArtistsData {
    slug: string;
}

async function fetchArtistDetail(slug: string) {
    const artistQuery = qs.stringify(
        {
            filters: {
                slug: {
                    $eq: slug,
                }
            }
        })
    const artistsPromise = await fetch(`http://localhost:1337/api/artists?${artistQuery}`)
    const artist = await artistsPromise.json()
    return artist.data[0]
}

export default async function DetailArtist({
    params
}: {
    params: DetailArtistsData
}) {

    const resolvedParams = await params;
    const artist = await fetchArtistDetail(resolvedParams.slug)
    if (!artist) {
        return <div>Artist not found</div>
    }

    return (

        <div>{artist.name} <h3>{artist.description}</h3></div>

    )
}