import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <div>
      <h1>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ProjectsSection />
      </h1>
    </div>
  );
}
