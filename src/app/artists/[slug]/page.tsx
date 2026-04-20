import qs from "qs";
import { notFound } from "next/navigation";
import ArtistDetailView from "../../../../components/ArtistDetailView";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

async function fetchArtistDetail(slug: string) {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    const query = qs.stringify({
        filters: { slug: { $eq: slug } },
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
            event: true,
        },
    });

    const res = await fetch(`${baseUrl}/api/artists?${query}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();
    return data?.data?.[0] ?? null;
}

export default async function ArtistPage({ params }: PageProps) {
    const { slug } = await params;
    const artist = await fetchArtistDetail(slug);

    if (!artist) notFound();

    return <ArtistDetailView artist={artist} />;
}
