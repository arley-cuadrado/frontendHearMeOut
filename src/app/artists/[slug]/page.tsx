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
    const artistsPromise = await fetch(`http://localhost:1337/api/artists?${artistQuery}`)
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
            <section className="flex flex-col items-center">
                <main className="w-150 gap-4">
                    <h1 className="text-8xl font-bold pt-16 pb-16">{artist.name}</h1> <h3>{artist.description}</h3>
                    <article className="prose max-w-none">
                        {artist.bodyContent.map((item: any, index: number) => OurRenderer(item, index))}
                    </article >
                    <Video video={artist.urlVideo} />
                    <Live params={artist} />
                </main>
                <MasonryGrid gallery={artist.gallery} />
                <SpotifyPlayer url={artist.spotifyUrl} spotifyAccount={artist.spotifyAccount} />
                <SocialMedia social={artist.socialMedia[0]} />
            </section>
        </>

    )
}