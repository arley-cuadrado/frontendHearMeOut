import Link from "next/link";

interface Artist {
    id: number;
    name: string;
    description: string;
    musicGenre: string;
    slug: string;
    photo: {
        formats: {
            small: {
                url: string;
            };
        };
    };
}

interface ArtistData {
    artists: Artist[];
}


export default function Releases({ artists }: ArtistData) {
    return (
        <>
            <h1 className="text-7xl mb-6 font font-bold text-gray-700">Releases</h1>
            {artists.map((artist: any) => (
                <article key={artist.id} className="grid hover:font-bold transition-all duration-300 w-200">
                    <Link href={`/artists/${artist.slug}`}>
                        <section className="flex bg-white pb-4 place-items-center">
                            <div className="pr-8 justify-start">
                                <p className="text-3xl text-gray-600 font-bold mb-2">{artist.name}</p>
                                <p className="text-2sm line-clamp-3 text-gray-500 mb-5 w-160">{artist.description}</p>
                                <strong>{artist.musicGenre ? `#${artist.musicGenre}` : ''}</strong>
                            </div>
                            <div className="h-24 overflow-hiddeng ">
                                <img
                                    className="w-32 h-full object-cover"
                                    src={`http://localhost:1337${artist.photo.formats.small.url}`}
                                    alt=""
                                />
                            </div>
                        </section>
                    </Link>
                    <hr className="my-4 grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3" />
                </article>
            ))
            }
        </>
    )
}