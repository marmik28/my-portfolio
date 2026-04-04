import { Analytics } from "@vercel/analytics/react";
import React, { useEffect } from "react";
import Hero from "@/Components/hero";
import Header from "@/Components/header";
import AboutMe from "@/Components/about";
import ProjectsSection from "@/Components/projects";
import ExperienceSection from "@/Components/resume";
import Footer from "@/Components/footer";
import Head from "next/head";

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Head>
        <title>Marmik Patel — Software Developer</title>
        <meta
          name="description"
          content="Marmik Patel — Software developer building elegant, efficient software."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Analytics />
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <Footer />
    </>
  );
};

export default Home;
