import Head from "next/head";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";
import Image from "next/image";
import ImageCard from "../components/image-card";
import { ChevronRightIcon } from "@heroicons/react/outline";
export default function Home() {
  const images = [
    {
      src: "/img/model1.png",
      alt: "model1",
    },
    {
      src: "/img/model2.png",
      alt: "model2",
    },
    {
      src: "/img/model3.png",
      alt: "model3",
    },
    {
      src: "/img/model1.png",
      alt: "model1",
    },
  ];
  return (
    <div className=" h-full">
      <Head>
        <title>Fashion Ecommerce</title>
        <meta name="description" content="A fashion e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex w-full h-full ">
        <div className=" h-full pl-20 pt-20 w-1/2">
          <div className="flex gap-16">
            <div>
              <h1
                className="font-bold text-6xl uppercase leading-[5rem]  
                w-full"
              >
                Tied Green
                <br />
                V-neck shirt
              </h1>
              <h3 className="text-5xl mt-6">$67</h3>
              <p className="my-6">
                V-neck shirt with lapel collar. Long sleeves with cuffs. Front
                tie at hem. Front button closure.
              </p>
            </div>
            <div className="flex place-items-end">
              <button className="bg-red-700 text-white font-semibold py-7 px-6 rounded-full text-lg ">
                Add
              </button>
            </div>
          </div>
          <div>
            <h5 className="uppercase font-bold ">Select size</h5>
            <div className="flex gap-5 my-6">
              <button className="border border-black font-bold rounded-full px-4 py-2 flex place-item-center ">
                S
              </button>
              <button className="border border-black font-bold rounded-full px-4 py-2 flex place-item-center ">
                S
              </button>
              <button className="border border-black font-bold rounded-full px-4 py-2 flex place-item-center ">
                S
              </button>
              <button className="font-bold uppercase">Size guide</button>
            </div>
            <div className="flex mt-12 place-items-center gap-4">
              <div className="flex gap-3.5 place-items-center">
                {images.map((image) => (
                  <ImageCard
                    key={image.src}
                    image={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <div>
                <ChevronRightIcon className="w-8 h-8 stroke-1 " />
              </div>
            </div>
          </div>
          <div className="my-20" />
        </div>
        <div className="w-1/2 overflow-hidden">
          <div className="w-full flex  h-full relative">
            <div className="w-[45rem] h-[45rem] absolute bg-themeGreen rounded-full bottom-24 -right-28 opacity-50">
            </div>
            <div className="w-full h-full relative ">
              
              <Image
                src="/img/model1.png"
                alt="model1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" place-self-center mb-36 relative right-10 mx-4 text-center">
              <div className="text-4xl">01</div>
              <div className="my-32"></div>
              <div className="text-xl">05</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
