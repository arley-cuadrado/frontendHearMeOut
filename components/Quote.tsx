/* eslint-disable @next/next/no-img-element */
import { getStrapiImage } from "../lib/utils"

interface QuoteProps {
    phrase?: { children?: { text?: string }[] }[];
    photo?: {
        url?: string;
        formats?: {
            thumbnail?: { url: string };
            small?: { url: string };
            medium?: { url: string };
        };
    };
}

export default function Quote({ phrase, photo }: QuoteProps) {

    if (!phrase?.length) return null

    const photoUrl =
        photo?.formats?.thumbnail?.url ||
        photo?.formats?.small?.url ||
        photo?.formats?.medium?.url ||
        photo?.url

    const quoteImage = getStrapiImage(photoUrl) || "/images/hero.jpeg"

    return (
        <>
            <section className="flex justify-center items-center flex-col md:flex-row gap-8">
                <img
                    className="w-32 h-32 rounded-full object-cover object-center"
                    src={quoteImage}
                    alt=""
                />
                <p className="text-2xl italic title">{phrase[0]?.children?.[0]?.text}</p>
            </section>
        </>
    )
}
