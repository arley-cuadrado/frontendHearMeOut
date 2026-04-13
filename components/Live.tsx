import { fetchArtistDetail } from '../lib/api';

export default async function Live({ params }: { params: { slug: string } }) {

    const artist = await fetchArtistDetail(params.slug)
    //const event = artist?.tour
    const event = artist.event

    return (<>
        <h2 className="text-8xl font-bold pt-0 pb-0">Tour 2026</h2>

        <section className="pt-24 pb-24">
            {
                event?.length > 0 ? (
                    <table className="table-auto w-150 gap-4 text-left">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>City</th>
                                <th>Venue</th>
                                <th>Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                event.map((item: any) => (
                                    <tr className="row-hover" key={item.id}>
                                        <td className="pt-2 pb-2">{item.date}</td>
                                        <td className="pt-2 pb-2">{item.city}</td>
                                        <td className="pt-2 pb-2"><span className="badge badge-soft badge-success text-xs">{item.venue}</span></td>
                                        <td>
                                            <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition">Get Ticket</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center py-4 text-gray-500">
                        No events available so far
                    </p>
                )
            }
        </section >

    </>)
}