import Artists from "./artists/page";
import Header from "../../components/Header";
import { fetchArtistDetail } from '../../lib/api';

export default async function Home() {

  const artist = await fetchArtistDetail("fireboy-dml")

  return (
    <>
      <section className="mb-16 text-gray-500">
        <Header artist={artist?.name} />
      </section>
      <Artists />
    </>
  );
}
