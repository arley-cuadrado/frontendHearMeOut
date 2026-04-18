// /lib/strapi.ts

export const getStrapiImage = (url?: string) => {
    if (!url) return "";

    if (url.startsWith("http")) return url;

    const base = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

    return `${base}${url}`;
};