export async function fetchArtistDetail(slug: string) {
    const res = await fetch(`http://localhost:1337/api/artists?filters[slug][$eq]=${slug}&populate=*`)
    const data = await res.json()
    return data.data[0]
}