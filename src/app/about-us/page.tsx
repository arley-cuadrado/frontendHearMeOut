import Link from "next/link"
import { fetchAdminBlog } from "../../../lib/api"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export default async function AboutUs() {

    const adminBlog = await fetchAdminBlog()

    if (!adminBlog) return <p>No content</p>

    return (
        <>
            <article className="prose max-w-none mx-auto lg:w-150 gap-4">
                <BlocksRenderer content={adminBlog.description} /><Link href={`mailto:${adminBlog.emailAdmin}`}>Por ahora, si quieres aparecer escribeme aquí.</Link>
                <h3>{adminBlog.name}</h3>
            </article>
        </>
    )
}