import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="bg-white/50">
                <section className="mx-auto max-w-4xl text-center py-6 text-sm text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} |  <strong><Link href={'https://www.instagram.com/arlo_cuadrado/'} target="_blank">@arlo_cuadrado</Link></strong>
                    </p>
                    <span>Made with love and lots of <strong className="underline decoration-wavy leading-loose">coffee</strong></span>
                </section>
            </footer>
        </>
    )
} 