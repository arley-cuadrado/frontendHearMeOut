import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";

interface DetailArtistsData {
    slug: string;
    photo: {
        formats: {
            small: {
                url: string;
            }
        }
    };
}

async function fetchArtistDetail(slug: string) {
    const artistQuery = qs.stringify(
        {
            filters: {
                slug: slug
            },
            populate: {
                bodyContent: {
                    on: {
                        "features.testimonial": {
                            populate: "*"
                        },
                        "features.spoiler": {
                            populate: "*"
                        },
                        "features.rich-text": {
                            populate: "*"
                        }
                    }
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

    console.log('TEXT TERMINAL ARLO: ' + JSON.stringify(artist))

    function OurRenderer(item: any, index: number) {
        if (item.__component === "features.testimonial") {
            return (<p key={index}>This is a testimonial</p>)
        }
        if (item.__component === "features.spoiler") {
            return (<p key={index}>This is a spoiler</p>)
        }
        if (item.__component === "features.rich-text") {
            return <BlocksRenderer key={index} content={item.content} />
        }
    }

    return (

        <>
            {artist.name} <h3>{artist.description}</h3>
            <div>
                {artist.bodyContent.map((item: any, index: number) => OurRenderer(item, index))}
            </div>
        </>

    )
}