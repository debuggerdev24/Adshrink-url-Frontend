import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { newsData } from "../constant/Contant";
import Card from "./Card";
import logo from "../indiaFlag.svg";

const News = () => {
  return (
    <>
      <div className="m-auto max-w-screen-lg md:px-0 p-3">
        <div className="flex items-center p-5 gap-2">
          <div className="ui header">
            <FaRegNewspaper fontSize={30} />
          </div>
          <div className="flex flex-col">
            <div className="text-white60 text-sm">TECHNOLOGY</div>
            <div className="font-bold text-2xl">Top Headlines</div>
            <div className="text-white60 text-sm flex ju">
              <img alt="logo" className="w-5 h-5" src={logo} /> Latest News.
            </div>
          </div>
        </div>
        <Card data={newsData} />
      </div>
      <div className="m-auto max-w-screen-lg px-4 p-5 md:px-0 border-b border-slate-300"></div>
    </>
  );
};

export default News;
