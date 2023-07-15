import React from "react";
import { Carousel } from "../../components/Carousel";
import Features from "../../components/Features";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = () => {
  return (
    <div className="relative ">
      <Carousel />
      <Features />
      <MenuWrapper/>
    </div>
  );
};

export default Index;
