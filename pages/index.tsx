import React, { useEffect } from "react";
import Hero from "@/Components/hero";
import Header from "@/Components/header";
import AboutMe from "@/Components/about";
import ProjectsSection from "@/Components/projects";
import ResumeSection from "@/Components/resume";

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
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
    </>
  );
};

export default Home;
