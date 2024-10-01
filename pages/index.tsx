import { Analytics } from "@vercel/analytics/react";
import React, { useEffect } from "react";
import Hero from "@/Components/hero";
import Header from "@/Components/header";
import AboutMe from "@/Components/about";
import ProjectsSection from "@/Components/projects";
import ResumeSection from "@/Components/resume";
import Footer from "@/Components/footer";
import Head from "next/head";

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Head>
        <title>Marmik</title>
        <meta name="description" content="Marmik's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <section id="resume">
        <ResumeSection />
      </section>

      <Footer />
    </>
  );
};

export default Home;
