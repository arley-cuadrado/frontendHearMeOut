import Link from "next/link"

export default async function SocialMedia({ social }: { social: Record<string, unknown> | null }) {
    if (!social) return null

    return (
        <>
            <ul className="flex flex-col md:flex-row gap-8 grid-cols-1 border-t border-gray-200 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 w-auto justify-center items-center">
                {Object.entries(social || {})
                    .filter(([, url]) => typeof url === "string" && url.trim() !== "")
                    .map(([platform, url]) => (
                        <li key={platform}>
                            <Link href={url as string} className="font-bold capitalize text-blue-500 dark:text-blue-400" target="_blank">{platform}</Link>
                        </li>
                    ))}
            </ul>
        </>
    )
}
