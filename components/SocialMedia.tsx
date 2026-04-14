import Link from "next/link"

export default async function SocialMedia({ social }: { social: any }) {
    if (!social) return null
    const { id, ...links } = social

    return (
        <>
            <ul className="flex gap-4 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 w-100">
                {Object.entries(social || {})
                    .filter(([_, url]) => typeof url === "string" && url.trim() !== "")
                    .map(([platform, url]) => (
                        <li key={platform}>
                            <Link href={url as string} className="font-bold capitalize text-blue-500" target="_blank">{platform}</Link>

                            {/*<Link
                                href={url as string}
                                target="_blank"
                                className="text-blue-500"
                            >
                                {url as string}
                            </Link>*/}
                        </li>
                    ))}
            </ul>
        </>
    )
}