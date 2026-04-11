import Artists from "./artists/page";
import Header from "../../components/Header";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mb-16 text-gray-500">
        <Header />
      </section>
      <Artists />
      <Artists />
    </>
  );
}
