import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fashion Ecommerce</title>
        <meta name="description" content="A fashion e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
