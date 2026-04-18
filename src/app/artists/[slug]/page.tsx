import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";
import Quote from "../../../../components/Quote";
import Live from "../../../../components/Live";
import Video from "../../../../components/Video";
import SpotifyPlayer from "../../../../components/SpotifyPlayer";
import SocialMedia from "../../../../components/SocialMedia";
import MasonryGrid from "../../../../components/MasonryGrid";
import ArtistsHeader from "../../../../components/ArtistsHeader";

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
                },
                socialMedia: true,
                gallery: true
            }
        })
    const artistsPromise = await fetch(`${process.env.STRAPI_BASE_URL}/api/artists?${artistQuery}`)
    const artist = await artistsPromise.json()
    return artist.data[0]
}

export default async function DetailArtist({ params }: { params: DetailArtistsData }) {

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
            <ArtistsHeader artist={artist} />
            <section className="flex flex-col items-center md:w-auto">
                <main className="mx-auto lg:w-150 gap-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold pt-16 pb-16 text-slate-700 dark:text-white">{artist.name}</h1> <p className="text-slate-600 dark:text-gray-400">{artist.description}</p>
                    <article className="
                        prose 
                        prose-h1:text-slate-700 prose-h1:dark:text-white 
                        prose-h2:text-slate-700 prose-h2:dark:text-white
                        prose-h3:text-slate-700 prose-h3:dark:text-white
                        prose-h4:text-slate-700 prose-h4:dark:text-white
                        prose-h5:text-slate-700 prose-h5:dark:text-white
                        max-w-none text-slate-600 dark:text-gray-400">
                        {artist.bodyContent.map((item: any, index: number) => OurRenderer(item, index))}
                    </article>
                    <Video video={artist.urlVideo} />
                    <Live params={artist} />
                    <MasonryGrid gallery={artist.gallery} />
                    <SpotifyPlayer url={artist.spotifyUrl} spotifyAccount={artist.spotifyAccount} />
                    <SocialMedia social={artist.socialMedia[0]} />
                </main>
            </section>
        </>

    )
}