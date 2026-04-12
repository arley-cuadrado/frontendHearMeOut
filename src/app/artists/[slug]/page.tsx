import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";
import Quote from "../../../../components/Quote";

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
                photo: {
                    populate: "*"
                },
                bodyContent: {
                    on: {
                        "features.rich-text": {
                            populate: "*"
                        },
                        "features.quote": {
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
        if (item.__component === "features.rich-text") {
            return <BlocksRenderer key={index} content={item.content} />
        }
        if (item.__component === "features.quote") {
            return <Quote key={index} phrase={item.phrase} photo={item.photo} />
        }
    }

    return (

        <>
            {artist.name} <h3>{artist.description}</h3>
            <article className="prose max-w-none"> {/* lg:prose-xl dark:prose-invert */}
                {artist.bodyContent.map((item: any, index: number) => OurRenderer(item, index))}
            </article >
            {/*<Quote />*/}
        </>

    )
}