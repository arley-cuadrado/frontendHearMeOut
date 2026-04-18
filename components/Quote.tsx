export default function Quote({ phrase, photo }: any) {

    if (!phrase?.length) return null

    return (
        <>
            <section className="flex justify-center items-center flex-col md:flex-row gap-8">
                <img className="w-32 h-32 rounded-full object-cover object-center" src={`http://localhost:1337${photo.formats.thumbnail.url}`} alt="" />
                <p className="text-2xl italic title">{phrase[0]?.children?.[0]?.text}</p>
            </section>
        </>
    )
}