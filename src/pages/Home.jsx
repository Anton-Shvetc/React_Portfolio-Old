import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <h1>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ProjectsSection />
        <ContactBanner />
        <Footer />
      </h1>
    </div>
  );
}
