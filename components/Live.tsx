interface LiveEvent {
    id: number;
    date: string;
    city: string;
    venue: string;
}

interface LiveEventsProps {
    events?: LiveEvent[];
}

export default function Live({ events = [] }: LiveEventsProps) {
    return (<>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold pt-0 pb-0">Tour 2026</h2>

        <section className="pt-24 pb-24">
            {
                events.length > 0 ? (
                    <div className="w-full">
                        <div className="hidden md:grid grid-cols-4 text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 py-2">
                            <span>DATE</span>
                            <span>CITY</span>
                            <span>VENUE</span>
                            <span>BUY</span>
                        </div>

                        {
                            events.map((item) => (
                                <div key={item.id} className="border-gray-200 md:grid md:grid-cols-4 md:items-center p-4 gap-2">
                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500 dark:text-gray-400">DATE</span>
                                        <span>{item.date}</span>
                                    </div>

                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500 dark:text-gray-400">CITY</span>
                                        <span>{item.city}</span>
                                    </div>

                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500 dark:text-gray-400">VENUE</span>
                                        <span>{item.venue}</span>
                                    </div>

                                    <div className="flex justify-between md:block mb-4">
                                        <span className="md:hidden font-semibold text-gray-500 dark:text-gray-400">BUY</span>
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
