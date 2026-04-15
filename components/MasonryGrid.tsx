'use client'
import { useState } from "react"

export default function MasonryGrid({ gallery }: { gallery: any }) {

    const [selectedImage, setSelectedImage] = useState<any>(null)

    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL

    const imageUrl =
        selectedImage?.formats?.medium?.url ||
        selectedImage?.formats?.small?.url ||
        selectedImage?.formats?.thumbnail?.url

    if (!gallery) return null

    return (
        <>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 py-10 md:py-20 w-150">{/* columns-1 sm:columns-2 1g:columns-3 py-10 md:py-20 gap-4 */}
                {gallery.map((image: any, index: any) => (
                    <div key={index} className="mb-4 break-inside-avoid">{/* mb-4 break-inside-avoid */}
                        <div
                            className="aspect-square overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={`${baseUrl}${image.formats.thumbnail.url}`}
                                key={image.id}
                                alt=""
                                className="w-full h-full object-cover" />{/* w-full object-cover rounded-lg */}
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
                        <img
                            src={`${baseUrl}${imageUrl}`}
                            className="max-h-[90vh] max-w-[90vw] rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                )
            }
        </>)
}