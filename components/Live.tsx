export default function Live() {
    return (<>
        <h2 className="text-8xl font-bold pt-16 pb-0">Tour 2026</h2>

        <section className="pt-24 pb-24">
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
                    <tr className="row-hover">
                        <td className="pt-2 pb-2">March 1, 2024</td>
                        <td className="pt-2 pb-2">Mexico City</td>
                        <td className="pt-2 pb-2"><span className="badge badge-soft badge-success text-xs">Centro de convenciones</span></td>
                        <td>
                            <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition">Get Ticket</button>
                        </td>
                    </tr>
                    <tr className="row-hover">
                        <td className="pt-2 pb-2">March 2, 2024</td>
                        <td className="pt-2 pb-2">Cartagena</td>
                        <td className="pt-2 pb-2"><span className="badge badge-soft badge-error text-xs">Plaza de Toros</span></td>
                        <td>
                            <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition">Get Ticket</button>
                        </td>
                    </tr>
                    <tr className="row-hover">
                        <td className="pt-2 pb-2">March 3, 2024</td>
                        <td className="pt-2 pb-2">Panama City</td>
                        <td className="pt-2 pb-2"><span className="badge badge-soft badge-info text-xs">El despeluque bar</span></td>
                        <td className="pt-2 pb-2">
                            <button className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800 transition">Get Ticket</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

    </>)
}