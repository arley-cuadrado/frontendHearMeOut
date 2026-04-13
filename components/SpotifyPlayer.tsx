import { getSpotifyEmbed } from "./getSpotifyEmbed"

export default function SpotifyPlayer({ url }: { url: string }) {
    const embedUrl = getSpotifyEmbed(url)

    console.log('Qué es esto de spotify? : ', getSpotifyEmbed)

    if (!embedUrl) return null

    return (
        <iframe
            src={embedUrl}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media"
            loading="lazy"
            className="rounded-xl"
        />
    )
}