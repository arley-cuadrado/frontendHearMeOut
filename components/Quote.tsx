/* eslint-disable @next/next/no-img-element */
import { getStrapiImage } from "../lib/utils"

interface QuoteProps {
    phrase?: { children?: { text?: string }[] }[];
    photo?: {
        formats?: {
            thumbnail?: {
                url: string;
            };
        };
    };
}

export default function Quote({ phrase, photo }: QuoteProps) {

    if (!phrase?.length) return null

    return (
        <>
            <section className="flex justify-center items-center flex-col md:flex-row gap-8">
                <img
                    className="w-32 h-32 rounded-full object-cover object-center"
                    src={getStrapiImage(photo?.formats?.thumbnail?.url)}
                    alt=""
                />
                <p className="text-2xl italic title">{phrase[0]?.children?.[0]?.text}</p>
            </section>
        </>
    )
}
