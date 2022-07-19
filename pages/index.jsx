import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";
import Image from "next/image";
import ImageCard from "../components/image-card";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
export default function Home() {
  const sizes = ["S", "M", "L"];
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
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedImage, setSelectedImage] = useState(images[0].src);
 
  return (
    <div className=" h-full">
      <Head>
        <title>Fashion Ecommerce</title>
        <meta name="description" content="A fashion e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex w-full h-full ">
        <div className=" h-full pl-20 pt-24 w-1/2">
          <div className="flex">
            <div>
              <h1
                className="font-bold text-6xl uppercase leading-[5rem]  
                w-full"
              >
                Tied Green
                <br />
                V-neck shirt
              </h1>
              <motion.div>
                <motion.h3 className="text-5xl mt-6" layout>
                  $67
                </motion.h3>
                <motion.p className="my-6">
                  V-neck shirt with lapel collar. Long sleeves with cuffs. Front
                  tie at hem. Front button closure.
                </motion.p>
              </motion.div>
            </div>
            <div className="flex place-items-center pb-14">
              <motion.button
                className="bg-red-700 text-white font-semibold py-10 text-xl px-8 rounded-full  uppercase  "
                whileTap={{
                  scale: 0.95,
                  transition: {
                    duration: 0.1,
                    ease: "easeInOut",
                  },
                }}
              >
                ADD
              </motion.button>
            </div>
          </div>
          <motion.div initial>
            <h5 className="uppercase font-bold ">Select size</h5>
            <div className="flex gap-5 my-6">
              {sizes.map((size, ind) => {
                if (ind < 3) {
                  return (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={` border-[1.5px] ${
                        selectedSize === size
                          ? "border-neutral-900 font-bold"
                          : "border-themeGray"
                      }  rounded-full w-10 h-10 flex transition duration-100 ease-in-out justify-center items-center`}
                    >
                      {size}
                    </motion.button>
                  );
                }
              })}
              <button className="font-bold uppercase">Size guide</button>
            </div>
            <div className="flex mt-12 place-items-center gap-4">
              <div className="flex gap-3.5 place-items-center">
                {images.map((image,index) => (
                  <ImageCard
                    key={image.src}
                    image={image.src}
                    alt={image.alt}
                    setImage={() => {
                      setSelectedImage(image.src);
                    }}
                  />
                ))}
              </div>
              <button className="relative z-10">
                <ChevronRightIcon className="w-8 h-8 stroke-1 " />
              </button>
            </div>
          </motion.div>
          <div className="my-20" />
        </div>
        <div className="w-1/2 overflow-hidden">
          <div className="w-full flex  h-full relative">
            <div className="w-[40rem] h-[40rem] absolute bg-themeGreen rounded-full bottom-16 -right-28 opacity-50"></div>
            <div className="w-full h-full relative">
              <Image
                src={selectedImage}
                alt="model1"
                layout="fill"
                objectFit="cover"
                objectPosition={"top"}
              />
            </div>
            <div className=" place-self-center mb-36 relative  mx-4 text-center">
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
