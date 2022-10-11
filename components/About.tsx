import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={
          "relative h-[120vh] flex flex-col text-center md:text-left md:flex-row max-w-7xl" +
          " px-10 justify-evenly mx-auto items-center md:h-screen"
        }
      >
        <h3
          className={
            "absolute top-36 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
          }
        >
          About
        </h3>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className={
            "-mb-20 mt-20 relative md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          }
        >
          <Image
            src="https://images.pexels.com/photos/10239356/pexels-photo-10239356.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="Profile Picture"
            layout={"fill"}
            className={"rounded-full object-cover md:rounded-lg"}
          />
        </motion.div>
        <div className={"space-y-10 px-0 md:px-10"}>
          <h4 className={"text-4xl font-semibold"}>
            Here is a{" "}
            <span className={"underline decoration-amber-200"}>little</span>{" "}
            background
          </h4>
          <p className={"text-base"}>
            I am a web developer whose specialty is in front end development
            with React and NextJS. I also have experience in using MongoDB as a
            database, Jest for testing and Node as a server-side language. I
            have also worked with React Native for building hybrid mobile apps
            for both android and iOS devices. I am currently I'm working on a
            range of freelance projects and seeking new opportunities. Outside
            software development and coding, I love music, traveling, taking on
            new adventures, playing video games.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
