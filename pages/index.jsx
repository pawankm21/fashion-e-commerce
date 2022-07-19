import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import ProductCard from "../components/product-card";
import Image from "next/image";
import ImageCard from "../components/image-card";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
  const container = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
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
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [animate, setAnimate] = useState(false);

  return (
    <div className=" h-full overflow-hidden">
      <Head>
        <title>Fashion Ecommerce</title>
        <meta name="description" content="A fashion e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="lg:flex w-full h-full ">
        <div className=" h-full pl-20 pt-24 lg:w-1/2 w-full">
          <div className="flex">
            <motion.div>
              <motion.h1
                className="font-bold text-6xl uppercase leading-[5rem]  
                w-full"
              >
                Tied Green
                <br />
                V-neck shirt
              </motion.h1>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <motion.h3 variants={item} className="text-5xl mt-6" layout>
                  $67
                </motion.h3>
                <motion.p variants={item} className="my-6">
                  V-neck shirt with lapel collar. Long sleeves with cuffs. Front
                  tie at hem. Front button closure.
                </motion.p>
              </motion.div>
            </motion.div>
            <motion.div className="flex place-items-center pb-14">
              <motion.button
                className="bg-red-700 text-white font-semibold py-10 text-xl px-8 rounded-full  uppercase  "
                layout
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
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
            </motion.div>
          </div>
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.h5 layout variants={item} className="uppercase font-bold ">
              Select size
            </motion.h5>
            <motion.div layout variants={item} className="flex gap-5 my-6">
              {sizes.map((size, ind) => {
                if (ind < 3) {
                  return (
                    <motion.button
                      layout
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
              <motion.button variants={item} className="font-bold uppercase">
                Size guide
              </motion.button>
            </motion.div>
            <motion.div
              variants={item}
              className="flex mt-12 place-items-center gap-4"
            >
              <motion.div
                variants={item}
                className="flex gap-3.5 place-items-center"
              >
                {images.map((image, index) => (
                  <ImageCard
                    key={image.src}
                    image={image.src}
                    alt={image.alt}
                    setImage={() => {
                      setSelectedImage(image);
                    }}
                  />
                ))}
              </motion.div>
              <motion.button variants={item} className="relative z-10">
                <ChevronRightIcon className="w-8 h-8 stroke-1 " />
              </motion.button>
            </motion.div>
          </motion.div>
          <div className="my-20" />
        </div>
        <div className="lg:w-1/2 w-full overflow-hidden">
          <div className="w-full flex  h-full relative">
            <div className="w-[40rem] h-[40rem] absolute bg-themeGreen rounded-full lg:bottom-16 lg:-right-28 opacity-50"></div>
            <img
              src={selectedImage.src}
              alt="model1"
              className="relative z-20 lg:hidden"
            />
            <AnimatePresence>

            {selectedImage ? (
              <motion.div
                key={selectedImage.src}
                layoutId="image"
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                  initial={{
                  opacity: 0,
                    x: 100,
                    position: "absolute",
                }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    position: "absolute",
                  }}
                
                className="w-full h-full relative lg:block hidden"
              >
                <Image
                  src={selectedImage}
                  alt="model1"
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"top"}
                />
              </motion.div>
            ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
