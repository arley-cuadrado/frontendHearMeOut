import Link from "next/link"
import Image from "next/image"
import arloImg from '../public/images/arlo_cuadrado.png'

export default function Aside() {
    return (
        <>
            <Link href={'/about-us'}>
                <aside className="gap-6 mb-7 bg-white border-l border-gray-100">
                    <div className="bg-white pb-24 sm:pb-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="font-semibold tracking-tight text-pretty text-gray-900 ">Binevenid@!</h2>
                                <p className="mt-2 text-gray-600">Esta es una versión temprana del sitio, un espacio donde encontrarás artistas independientes.</p>
                            </div>
                            <div className="grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <article className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2020-03-16" className="text-gray-500">Apr 17, 2026</time>
                                        {/*<Link href="/about-us" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">CTO</Link>*/}
                                    </div>
                                    <div className="group relative grow">
                                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                            {/*<a href={'/about-us'}>*/}
                                            <span className="absolute inset-0"></span>
                                            Por qué Oddsound?
                                            {/*</a>*/}
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                        <Image src={arloImg} alt="" className="size-10 rounded-full bg-gray-50" />
                                        <div className="text-sm/6">
                                            <p className="font-semibold text-gray-900">
                                                {/*<a href={'/about-us'}>*/}
                                                <span className="absolute inset-0"></span>
                                                Arlo Cuadrado
                                                {/*</a>*/}
                                            </p>
                                            <p className="text-gray-600">Founder / "Content Creator"</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </aside>
            </Link>

        </>)
}