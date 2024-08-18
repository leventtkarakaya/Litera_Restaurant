import React from "react";
import Content from "../Components/Content";
import About from "../Components/About";
import Menu from "../Components/Menu";
import Gallery from "../Components/Gallery";
import Blog from "../Components/Blog";
import Map from "../Components/Map";
export default function Home() {
  return (
    <>
      <Content />
      <About />
      <Menu />
      <Gallery />
      <Blog />
      <Map />
    </>
  );
}
