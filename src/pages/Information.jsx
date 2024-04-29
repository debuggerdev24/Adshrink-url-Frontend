import React from "react";
import News from "../component/News";
import About from "../component/About";
import Publish from "../component/Publish";
import Article from "../component/Article";
import Preview from "../component/Preview";

const Information = () => {
  return (
    <>
      <Preview />
      <News />
      <About />
      <Publish />
      <Article />
    </>
  );
};

export default Information;
