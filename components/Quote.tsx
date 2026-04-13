export default function Quote({ phrase, photo }: any) {

    if (!phrase?.length) return null

    return (
        <>
            <section className="flex">
                <img className="w-32 h-32 rounded-full object-cover object-center" src={`http://localhost:1337${photo.formats.thumbnail.url}`} alt="" />
                <blockquote className="prose rounded-lg py-6 px-16 pb-0 mb-24"><p className="text-2xl italic text-gray-600">{phrase[0]?.children?.[0]?.text}</p></blockquote>
            </section>
        </>
    )
}