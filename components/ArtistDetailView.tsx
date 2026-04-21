import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

import Quote from "./Quote";
import Live from "./Live";
import Video from "./Video";
import SpotifyPlayer from "./SpotifyPlayer";
import SocialMedia from "./SocialMedia";
import MasonryGrid from "./MasonryGrid";
import ArtistsHeader from "./ArtistsHeader";

interface StrapiImage {
    formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
    };
}

interface RichTextChild {
    text?: string;
}

interface QuoteContent {
    __component: "features.quote";
    phrase?: { children?: RichTextChild[] }[];
    photo?: StrapiImage;
}

interface RichTextContent {
    __component: "features.rich-text";
    content: BlocksContent;
}

type ArtistBodyItem = RichTextContent | QuoteContent;

interface ArtistDetail {
    name?: string;
    releasesTitle?: string;
    musicGenre?: string;
    description?: string;
    bodyContent?: ArtistBodyItem[];
    urlVideo?: string;
    event?: { id: number; date: string; city: string; venue: string }[];
    gallery?: { id: number; formats: { thumbnail: { url: string }; small?: { url: string }; medium?: { url: string } } }[];
    spotifyUrl?: string;
    spotifyAccount?: string;
    socialMedia?: Record<string, unknown>[];
    photo?: StrapiImage;
}

export default function ArtistDetailView({ artist }: { artist: ArtistDetail | null }) {
    if (!artist) return null;

    function OurRenderer(item: ArtistBodyItem, index: number) {
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
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold pt-16 pb-16 text-slate-700 dark:text-white">
                        {artist?.name ?? "Unknown Artist"}
                    </h1>

                    {artist?.description && (
                        <p className="text-slate-600 dark:text-gray-400">
                            {artist.description}
                        </p>
                    )}

                    {(artist.bodyContent?.length ?? 0) > 0 && (
                        <article className="prose max-w-none text-slate-600 dark:text-gray-400">
                            {artist.bodyContent?.map((item, index) =>
                                OurRenderer(item, index)
                            )}
                        </article>
                    )}

                    {artist?.urlVideo && <Video video={artist.urlVideo} />}

                    <Live events={artist?.event ?? []} />

                    {(artist.gallery?.length ?? 0) > 0 && (
                        <MasonryGrid gallery={artist.gallery ?? []} />
                    )}

                    {(artist?.spotifyAccount || artist?.spotifyUrl) && (
                        <SpotifyPlayer
                            url={artist.spotifyUrl}
                            spotifyAccount={artist.spotifyAccount}
                        />
                    )}

                    {artist?.socialMedia?.[0] && (
                        <SocialMedia social={artist.socialMedia[0]} />
                    )}
                </main>
            </section>
        </>
    );
}
