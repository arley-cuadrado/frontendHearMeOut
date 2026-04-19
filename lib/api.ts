//---------- fetchArtistDetail

export async function fetchArtistDetail(slug: string) {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    if (!baseUrl) {
        console.error("Missing STRAPI URL");
        return null;
    }

    try {
        const res = await fetch(
            `${baseUrl}/api/artists?filters[slug][$eq]=${slug}&populate=*`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!res.ok) {
            console.error("Fetch artist failed:", res.status);
            return null;
        }

        const data = await res.json();
        return data?.data?.[0] || null;

    } catch (err) {
        console.error("Fetch artist crashed:", err);
        return null;
    }
}


//---------- fetchAdminBlog

export async function fetchAdminBlog() {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    if (!baseUrl) {
        console.error("Missing STRAPI URL");
        return null;
    }

    try {
        const res = await fetch(`${baseUrl}/api/admin-blogs`, {
            next: { revalidate: 120 },
        });

        if (!res.ok) {
            console.error("Fetch blog failed:", res.status);
            return null;
        }

        const dataBlog = await res.json();
        return dataBlog?.data?.[0] || null;

    } catch (err) {
        console.error("Fetch blog crashed:", err);
        return null;
    }
}