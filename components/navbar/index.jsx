import { useState } from "react";
import {
  CollectionIcon,
  HeartIcon,
  UserIcon,
  MenuAlt2Icon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Image from "next/image";
const TABS = [
  {
    name: "New",
  },
  {
    name: "Sale",
  },
  {
    name: "Men",
  },
  {
    name: "Women",
  },
];
export default function Navbar() {
  const [selected, setSelected] = useState(TABS[0]);

  function handleClick(ind) {
    setSelected(TABS[ind]);
  }

  return (
    <div className="w-full border-b border-themeGray border-opacity-40 flex place-items-center  ">
      <div className="grid grid-cols-6 lg:grid-cols-8 border-r lg:w-auto w-100">
        <div className="col-span-2 divide-x divide-themeGray divide-opacity-40 flex border-r border-themeGray border-opacity-40">
          <div className="lg:py-7 p-5">
            <MenuAlt2Icon className="w-8 h-6" />
          </div>

          <div className="grid place-items-center w-full">
            <div className="w-12 h-12">
              <Image
                width={100}
                height={100}
                src="/img/logo.svg"
                alt="logo"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <motion.div className="col-span-4 flex place-items-center h-20">
          {TABS.map((tab, ind) => {
            return (
              <div key={tab.name} className="flex flex-col h-full w-24">
                <button
                  onClick={() => {
                    handleClick(ind);
                  }}
                  className="py-7 h-auto"
                >
                  {tab.name}
                </button>
                {selected === tab ? (
                  <motion.div
                    layoutId="underline"
                    className="bg-red-500  border  align-end border-red-500 mx-4 "
                  ></motion.div>
                ) : null}
              </div>
            );
          })}
        </motion.div>
      </div>
      <div
        id="search"
        className="lg:flex hidden h-20 place-items-center w-2/5  justify-center gap-8 "
      >
        <HeartIcon className="w-5 h-5" />
        <input
          type="text"
          on
          className=" outline-none placeholder:text-black"
          placeholder="Search"
        />
      </div>
      <div className="h-20 lg:w-96 lg:mx-auto lg:block hidden border-x">
        <div className="w-full h-full flex place-items-center gap-8 justify-center">
          <CollectionIcon className="w-6 h-6" />
          <UserIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
