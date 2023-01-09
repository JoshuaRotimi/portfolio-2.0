import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
  return (
    <div
      className={
        "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory " +
        "overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40"
      }
    >
      <Head>
        <title>Joshua Rotimi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id={"hero"} className={"snap-start"}>
        <Hero />
      </section>

      {/* About */}

      <section id={"about"} className={"snap-center"}>
        <About />
      </section>

      {/* Experience */}
      <section id={"experience"} className={"snap-center"}>
        <WorkExperience />
      </section>

      {/* Projects */}
      <section id={"projects"} className={"snap-center"}>
        <Projects />
      </section>

      {/* Skills */}
      <section id={"skills"} className={"snap-start"}>
        <Skills />
      </section>

      {/* Contact Me */}
      <section id={"contact"} className={"snap-center"}>
        <ContactMe />
      </section>

      <Link href={"#hero"}>
        <footer className={"sticky bottom-5 w-full cursor-pointer"}>
          <div className={"flex items-center justify-center"}>
            <img
              className={
                "h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              }
              src="https://images.pexels.com/photos/10239356/pexels-photo-10239356.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
