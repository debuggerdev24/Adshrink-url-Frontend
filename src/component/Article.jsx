import React from "react";
import { FaThumbtack } from "react-icons/fa";
import Card from "./Card";
import { ArticlesData } from "../constant/Contant";

const Article = () => {
  return (
    <div className="m-auto max-w-screen-lg md:px-0 pb-10">
      <div className="flex items-center p-5 gap-2">
        <div className="ui header">
          <FaThumbtack fontSize={30} />
        </div>
        <div className="flex flex-col">
          <div className="text-white60 text-sm">ARTICLES</div>
          <div className="font-bold text-2xl">In Case You Missed It</div>
          <div className="text-white60 text-sm">
            A recap of last week's most popular articles
          </div>
        </div>
      </div>
      <Card data={ArticlesData} />
    </div>
  );
};

export default Article;
