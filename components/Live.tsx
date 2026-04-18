import { fetchArtistDetail } from '../lib/api';

interface LiveEventsProps {
    params: {
        slug: string;
    };
}

interface LiveEvent {
    id: number;
    slug: string;
    date: string;
    city: string;
    venue: string;
}

interface ArtistDetail {
    event: LiveEvent[];
}

export default async function Live({ params }: LiveEventsProps) {

    const artist: ArtistDetail = await fetchArtistDetail(params.slug)

    const event = artist.event

    return (<>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold pt-0 pb-0">Tour 2026</h2>

        <section className="pt-24 pb-24">
            {
                event?.length > 0 ? (
                    <div className="w-full">
                        <div className="hidden md:grid grid-cols-4 text-sm font-semibold text-gray-500 px-4 py-2">
                            <span>DATE</span>
                            <span>CITY</span>
                            <span>VENUE</span>
                            <span>BUY</span>
                        </div>

                        {
                            event.map((item) => (
                                <div key={item.id} className="border-gray-200 md:grid md:grid-cols-4 md:items-center p-4 gap-2">
                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500">DATE</span>
                                        <span>{item.date}</span>
                                    </div>

                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500">CITY</span>
                                        <span>{item.city}</span>
                                    </div>

                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500">VENUE</span>
                                        <span>{item.venue}</span>
                                    </div>

                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500">BUY</span>
                                        <button className="bg-black text-white px-4 py-2 rounded-full">
                                            Get Ticket
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                ) : (

                    <p className="text-center py-4 text-gray-500">
                        No events available so far
                    </p>
                )
            }
        </section >

    </>)
}