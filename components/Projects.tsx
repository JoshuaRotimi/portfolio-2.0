import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "h-screen relative flex overflow-hidden flex-col text-left md: flex-row max-w-full justify-evenly mx-auto items-center z-0"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Projects
      </h3>
      <div
        className={
          "relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
        }
      >
        {projects.map((project, index) => (
          <div
            className={
              "w-screen flex-shrink-0 snap-center flex flex-col space-y-5 " +
              "items-center justify-center p-20 md:p-44 h-screen"
            }
          >
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://images.pexels.com/photos/4254268/pexels-photo-4254268.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              className={"h-[30%] md:h-[50%]"}
            />
            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-lg md:text-4xl font-semibold text-center"}>
                <span className={"underline decoration-amber-200"}>
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>

              <p className={"text-sm md:text-lg text-center md:text-left"}>
                Netflix 2.0 app that has a log in and log out authentication
                with Google. It has a beautiful home screen with all the movies
                looking just like Netflix. There is also a subscription page
                where you can see your active monthly subscription.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={
          "w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"
        }
      ></div>
    </motion.div>
  );
};

export default Projects;
