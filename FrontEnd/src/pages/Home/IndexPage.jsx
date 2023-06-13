import React from "react";
import HeroSection from "./HeroSection";
import ResourceCard from "../../Components/ResourceCard/ResourceCard";
import Clubcard from "../../Components/ClubCard/Clubcard";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <ResourceCard />
      <Clubcard />
    </>
  );
};

export default IndexPage;
