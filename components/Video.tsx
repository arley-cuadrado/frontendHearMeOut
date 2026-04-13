function getYouTubeEmbedUrl(video: string) {
    try {
        const parsedUrl = new URL(video)

        if (parsedUrl.hostname === "youtu.be") {
            return `https://www.youtube.com/embed${parsedUrl.pathname}`
        }

        if (parsedUrl.searchParams.get("v")) {
            return `https://www.youtube.com/embed/${parsedUrl.searchParams.get("v")}`
        }

        if (parsedUrl.pathname.includes("/shorts/")) {
            const id = parsedUrl.pathname.split("/shorts/")[1]
            return `https://www.youtube.com/embed/${id}`
        }

        return null
    } catch {
        return null
    }
}

export default function Video({ video }: { video: string }) {

    const embedUrl = getYouTubeEmbedUrl(video)

    if (!embedUrl) return <p>Invalid video URL</p>

    return (
        <>
            <section className="container">


                <iframe
                    src={embedUrl || ""}
                    className="w-full aspect-video"
                    allowFullScreen
                />
            </section>
        </>
    )
}