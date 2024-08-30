import React from "react";
import Hero from "@/Components/hero";
import Header from "@/Components/header";
import AboutMe from "@/Components/about";
import ProjectsSection from "@/Components/projects";
import ResumeSection from "@/Components/resume";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <ResumeSection />
    </>
  );
};

export default Home;
