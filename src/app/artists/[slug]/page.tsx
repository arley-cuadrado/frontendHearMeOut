import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";
import { notFound } from "next/navigation";

import Quote from "../../../../components/Quote";
import Live from "../../../../components/Live";
import Video from "../../../../components/Video";
import SpotifyPlayer from "../../../../components/SpotifyPlayer";
import SocialMedia from "../../../../components/SocialMedia";
import MasonryGrid from "../../../../components/MasonryGrid";
import ArtistsHeader from "../../../../components/ArtistsHeader";

interface PageProps {
    params: {
        slug: string;
    };
}

async function fetchArtistDetail(slug: string) {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    if (!baseUrl) {
        throw new Error("Missing STRAPI URL");
    }

    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            photo: { populate: "*" },
            bodyContent: {
                on: {
                    "features.rich-text": { populate: "*" },
                    "features.quote": { populate: "*" },
                },
            },
            socialMedia: true,
            gallery: true,
        },
    });

    const res = await fetch(`${baseUrl}/api/artists?${query}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch artist: ${res.status}`);
    }

    const data = await res.json();
    return data?.data?.[0] ?? null;
}

export default async function DetailArtist({ params }: PageProps) {
    const artist = await fetchArtistDetail(params.slug);

    if (!artist) {
        notFound();
    }

    function OurRenderer(item: any, index: number) {
        if (item.__component === "features.rich-text") {
            return <BlocksRenderer key={index} content={item.content} />;
        }

        if (item.__component === "features.quote") {
            return (
                <Quote key={index} phrase={item?.phrase} photo={item?.photo} />
            );
        }

        return null;
    }

    return (
        <>
            <ArtistsHeader artist={artist} />

            <section className="flex flex-col items-center md:w-auto">
                <main className="mx-auto lg:w-150 gap-4">
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold pt-16 pb-16 text-slate-700 dark:text-white">
                        {artist?.name ?? "Unknown Artist"}
                    </h1>

                    {/* Description */}
                    {artist?.description && (
                        <p className="text-slate-600 dark:text-gray-400">
                            {artist.description}
                        </p>
                    )}

                    {/* Body content */}
                    {artist?.bodyContent?.length > 0 && (
                        <article
                            className="
                                    prose 
                                    prose-h1:text-slate-700 prose-h1:dark:text-white 
                                    prose-h2:text-slate-700 prose-h2:dark:text-white
                                    prose-h3:text-slate-700 prose-h3:dark:text-white
                                    prose-h4:text-slate-700 prose-h4:dark:text-white
                                    prose-h5:text-slate-700 prose-h5:dark:text-white
                                    max-w-none text-slate-600 dark:text-gray-400
              "
                        >
                            {artist.bodyContent.map((item: any, index: number) =>
                                OurRenderer(item, index)
                            )}
                        </article>
                    )}

                    {/* Video */}
                    {artist?.urlVideo && <Video video={artist.urlVideo} />}

                    {/* Live */}
                    <Live params={artist} />

                    {/* Gallery */}
                    {artist?.gallery?.length > 0 && (
                        <MasonryGrid gallery={artist.gallery} />
                    )}

                    {/* Spotify */}
                    {artist?.spotifyUrl && (
                        <SpotifyPlayer
                            url={artist.spotifyUrl}
                            spotifyAccount={artist.spotifyAccount}
                        />
                    )}

                    {/* Social media */}
                    {artist?.socialMedia?.[0] && (
                        <SocialMedia social={artist.socialMedia[0]} />
                    )}
                </main>
            </section>
        </>
    );
}