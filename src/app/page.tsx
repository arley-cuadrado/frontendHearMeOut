import Artists from "./artists/page";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mb-16 text-gray-500">
        <h1>HomePage</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum atque a, nesciunt maxime, placeat expedita id facere fugiat amet iste eligendi distinctio tempora dicta asperiores ipsam molestias. Quaerat, fugiat iste.</p>
      </section>
      <Artists />
    </>
  );
}
