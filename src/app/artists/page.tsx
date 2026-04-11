import Link from "next/link";

interface ArtistsData {
    id: number;
    name: string;
    description: string;
    slug: string;
    email: string;
    photo: {
        formats: {
            small: {
                url: string;
            };
        };
    };
}

async function getAllArtists() {
    const artistsPromise = await fetch("http://localhost:1337/api/artists?populate=*")
    const artists = await artistsPromise.json()
    return artists.data
}

export default async function Artists() {
    const artists = await getAllArtists()


    return (
        <>
            <h1 className="text-7xl mb-6 font font-bold text-gray-700">Releases</h1>
            <div className="grid grid-cols-3 gap-6">
                {artists.map((artist: ArtistsData) => (
                    <div key={artist.id}>
                        <Link className="group grid grid-cols--[140px_1fr] bg-white shadow overflow-hidden relative" href={`/artists/${artist.slug}`}>
                            <div className="w-full- h-55 overflow-hidden">
                                <img className="transition duration-800 inset-0 w-full h-full object-cover group-hover:scale-105 group-hover:rotate-0" src={`http://localhost:1337${artist.photo.formats.small.url}`} alt="" />{/* absolute */}
                            </div>
                            <div className="p-8">
                                <p className="text-3xl text-gray-600 font-bold mb-5">{artist.name}</p>
                                <p className="text-2sm line-clamp-3 text-gray-500 leading-6 mb-5">{artist.description}</p>
                                <strong>#Category</strong>
                            </div>
                        </Link>
                    </div>

                ))
                }
            </div>
        </>
    )
}