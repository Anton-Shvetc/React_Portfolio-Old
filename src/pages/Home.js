import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div>
      <h1>
        <HeroSection />
        <AboutSection />
      </h1>
    </div>
  );
}
