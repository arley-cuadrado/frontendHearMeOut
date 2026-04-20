import Header from "../../components/Header";
import { fetchHomeArtist } from "../../lib/api";
import Artists from "./artists/page";

export default async function Home() {
  const artist = await fetchHomeArtist();

  return (
    <>
      <section className="mb-16">
        <Header artist={artist?.name} />
      </section>

      <Artists />
    </>
  );
}
