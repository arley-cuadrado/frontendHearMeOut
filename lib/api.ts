//---------- fetchArtistDetail

export async function fetchArtistDetail(slug: string) {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    if (!baseUrl) {
        throw new Error("Missing NEXT_PUBLIC_STRAPI_BASE_URL");
    }

    const res = await fetch(
        `${baseUrl}/api/artists?filters[slug][$eq]=${slug}&populate=*`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch artist: ${res.status}`);
    }

    const data = await res.json();

    return data?.data?.[0] || null;
}

//---------- fetchAdminBlog

export async function fetchAdminBlog() {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    if (!baseUrl) {
        throw new Error("Missing NEXT_PUBLIC_STRAPI_BASE_URL");
    }

    const res = await fetch(`${baseUrl}/api/admin-blogs`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch admin blog: ${res.status}`);
    }

    const dataBlog = await res.json();

    return dataBlog?.data?.[0] || null;
}