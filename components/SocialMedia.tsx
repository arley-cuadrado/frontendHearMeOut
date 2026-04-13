import { fetchArtistDetail } from '../lib/api';

interface socialNetwork {
    socialmedia: string;
}

export default async function SocialMedia({ socialmedia }: socialNetwork) {

    const social = await fetchArtistDetail(socialmedia)

    console.log('SOCIAL MEDIA HERE: ', socialmedia)

    return (
        <>
            <h2>social media here...{social}</h2>
        </>
    )
}