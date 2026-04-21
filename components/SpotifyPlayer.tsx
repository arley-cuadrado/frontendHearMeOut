import { getSpotifyEmbed } from "./getSpotifyEmbed"

interface SpotifyPlayerProps {
    url?: string;
    spotifyAccount?: string;
}

export default function SpotifyPlayer({ url, spotifyAccount }: SpotifyPlayerProps) {
    const spotifyLink = spotifyAccount || url
    const embedUrl = getSpotifyEmbed(spotifyLink)

    if (!embedUrl) return null

    return (
        <iframe
            src={embedUrl}
            width="100%"
            height="auto"
            title={spotifyAccount ? `${spotifyAccount} on Spotify` : "Spotify player"}
            allow="autoplay; clipboard-write; encrypted-media"
            loading="lazy"
            className="rounded-xl"
        />
    )
}
