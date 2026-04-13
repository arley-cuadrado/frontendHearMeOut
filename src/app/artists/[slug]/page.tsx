import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";
import Quote from "../../../../components/Quote";
import Live from "../../../../components/Live";
import Video from "../../../../components/Video";
import SpotifyPlayer from "../../../../components/SpotifyPlayer";

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

            <header className="bg-[url('/images/hero.jpeg')] bg-cover bg-center h-100 flex items-center ">
                <img
                    className="w-100 h-full object-cover"
                    src={`http://localhost:1337${artist.photo.formats.small.url}`}
                    alt=""
                />
                <section>
                    <h1 className="text-5xl text-center uppercase font-bold text-white">
                        {artist.releasesTitle}
                    </h1>
                    <div><strong className="text-white">{artist.musicGenre}</strong></div>
                </section>
            </header>
            <section className="flex flex-col items-center">
                <main className="w-150 gap-4">
                    <h1 className="text-8xl font-bold pt-16 pb-16">{artist.name}</h1> <h3>{artist.description}</h3>
                    <article className="prose max-w-none"> {/* lg:prose-xl dark:prose-invert */}
                        {artist.bodyContent.map((item: any, index: number) => OurRenderer(item, index))}
                    </article >
                    <Video video={artist.urlVideo} />
                    <Live params={artist} />
                </main>
                <SpotifyPlayer url={artist.spotifyUrl} />
            </section>
            {/*<Quote />*/}
        </>

    )
}