import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function ImageCard(props) {
  return (
    <motion.button
      className="w-32 h-56 overflow-clip bg-gradient-to-r from-[#F0F1F2] to-[#EAEBEC] "
      layout
      onClick={props.setImage}
    >
      <motion.div
        whileHover={{
          scale: 1.3,
          transition: {
            ease: "easeInOut",
          },
        }}
        layout
        className="relative w-32 h-56 "
      >
        <Image src={props.image} alt="image" layout="fill" objectFit="cover" />
      </motion.div>
    </motion.button>
  );
}
