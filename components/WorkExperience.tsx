import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const WorkExperience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={
          "h-screen flex relative overflow-hidden " +
          "flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        }
      >
        <h3
          className={
            "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
          }
        >
          Experience
        </h3>

        <div
          className={
            "w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory " +
            "scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40"
          }
        >
          <Card />
          <Card />
          <Card />
        </div>
      </motion.div>
    </>
  );
};

export default WorkExperience;
