export function getSpotifyEmbed(url: string) {
    try {
        const parsed = new URL(url)

        // limpia parámetros tipo ?si=xxxx
        const cleanPath = parsed.pathname.split("?")[0]

        // ejemplo: /artist/123abc
        const parts = cleanPath.split("/").filter(Boolean)

        const type = parts[0] // artist, track, album, playlist
        const id = parts[1]

        if (!type || !id) return null

        return `https://open.spotify.com/embed/${type}/${id}`
    } catch {
        return null
    }
}