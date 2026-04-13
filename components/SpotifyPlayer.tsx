import { getSpotifyEmbed } from "./getSpotifyEmbed"

interface spotifyAccount {
    url: string;
    spotifyAccount: string;
}
export default function SpotifyPlayer({ url, spotifyAccount }: spotifyAccount) {
    const embedUrl = getSpotifyEmbed(spotifyAccount)

    if (!spotifyAccount || !embedUrl) return null

    return (
        <iframe
            src={embedUrl}
            width="50%"
            height="auto"
            allow="autoplay; clipboard-write; encrypted-media"
            loading="lazy"
            className="rounded-xl"
        />
    )
}