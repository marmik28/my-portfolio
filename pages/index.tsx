import React from "react";
import Hero from "@/Components/hero";
import Header from "@/Components/header";
import AboutMe from "@/Components/aboutme";
import ProjectsSection from "@/Components/projects";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectsSection />
    </>
  );
};

export default Home;
