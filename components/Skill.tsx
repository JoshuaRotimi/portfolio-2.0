import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className={"group relative flex cursor-pointer"}>
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={
          "rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-32 xl:h-32"
        }
      >
        <Image
          src="https://images.pexels.com/photos/6604310/pexels-photo-6604310.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          className={
            "rounded-full object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
          }
          layout={"fill"}
        />
      </motion.div>

      {/*<div*/}
      {/*  className={*/}
      {/*    "absolute opacity-0 hover:opacity-80 transition " +*/}
      {/*    "duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <div className={"flex items-center justify-center h-full"}>*/}
      {/*    <p className={"text-3xl font-bold text-black opacity-100"}>100%</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Skill;
