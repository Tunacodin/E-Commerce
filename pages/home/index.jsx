import React from "react";
import { Carousel } from "../../components/Carousel";
import Features from "../../components/Features";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/About";

const Index = () => {
  return (
    <div className="relative ">
      <Carousel />
      <MenuWrapper />
    </div>
  );
};

export default Index;
