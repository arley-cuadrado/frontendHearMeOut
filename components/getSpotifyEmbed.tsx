export function getSpotifyEmbed(url?: string) {
    if (!url) return null

    try {
        const parsed = new URL(url)

        // Clean params as ?si=xxxx
        const cleanPath = parsed.pathname.split("?")[0]

        // examples: /artist/123abc or /embed/artist/123abc
        const parts = cleanPath.split("/").filter(Boolean)
        const spotifyParts = parts[0] === "embed" ? parts.slice(1) : parts

        const type = spotifyParts[0]
        const id = spotifyParts[1]

        if (!type || !id) return null

        return `https://open.spotify.com/embed/${type}/${id}`
    } catch {
        return null
    }
}
