'use client'
/* eslint-disable @next/next/no-img-element */
import { getStrapiImage } from "../lib/utils";
import { useState } from "react"

interface ImageFormat {
    url: string;
}

interface ImageFormats {
    thumbnail: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
}

interface GalleryImage {
    id: number;
    formats: ImageFormats;
}

interface MasonryGridProps {
    gallery: GalleryImage[];
}

export default function MasonryGrid({ gallery }: MasonryGridProps) {

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

    //const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    //const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

    const imageUrl =
        selectedImage?.formats?.medium?.url ||
        selectedImage?.formats?.small?.url ||
        selectedImage?.formats?.thumbnail?.url;

    if (!gallery) return null

    return (
        <>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 py-10 md:py-20 w-auto">
                {gallery.map((image, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <div
                            className="aspect-square overflow-hidden"
                            onClick={() => setSelectedImage(image)}
                        >{/* rounded-lg */}
                            <img src={getStrapiImage(image?.formats?.thumbnail?.url)}
                                key={image.id}
                                alt=""
                                className="w-full h-full object-cover cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>

            {
                selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <img src={getStrapiImage(imageUrl)}
                            className="max-h-[90vh] max-w-[90vw]"
                            alt=""
                            onClick={(e) => e.stopPropagation()}
                        />{/* rounded-lg */}
                    </div>

                )
            }
        </>)
}
