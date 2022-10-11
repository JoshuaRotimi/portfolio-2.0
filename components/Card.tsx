import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <article
      className={
        "flex flex-col rounded-l items-center space-y-7 flex-shrink-0" +
        " w-[500px] md:w-[600px] xl:w-[900]px snap-center bg-[#292929] " +
        "p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
      }
    >
      <motion.img
        initial={{ y: -100, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={
          "w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        }
        src="https://images.pexels.com/photos/10905954/pexels-photo-10905954.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        alt=""
      />

      <div className={"px-0 md:px-10"}>
        <h4 className={"text-4xl font-light"}>Frontend Engineer</h4>
        <p className={"font-bold text-2xl mt-1"}>RigelProtocol</p>
        <div className={"flex space-x-2 my-2"}>
          <img
            className={"h-10 w-10 rounded-full"}
            src="https://images.pexels.com/photos/10905954/pexels-photo-10905954.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
        </div>
        <p className={"uppercase py-5 text-gray-300"}>
          Started work... Ended ...
        </p>

        <ul className={"list-disc space-y-4 ml-5 text-lg"}>
          <li>Work Summary</li>
          <li>Work Summary</li>
          <li>Work Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
