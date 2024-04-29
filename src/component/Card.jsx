import React from "react";
import { FaPaperclip } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6">
      {data.map((news, index) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[500px]  bg-white p-4 border">
          <div className="col-span-1 md:col-span-1 w-full md:w-[160px] h-[160px]">
            <img
              src={news.image}
              alt={news.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-2 ml-0 md:ml-4 flex flex-col gap-2 md:gap-0 p-2 justify-between">
            <span className="text-xs text-grey-light flex items-center gap-3">
              <span className="text-white60 text-sm">{news.source}</span>
              <a href={news.link} className="text-xs text-blue-500">
                {news.time}
              </a>
            </span>
            <a href={news.link} className="text-sm font-bold">
              {news.title}
            </a>
            <p className="text-white60 text-sm">{news.description}</p>
            <div className="flex gap-2 text-sm text-white60 items-center">
              <FaPaperclip fontSize={15} />
              {news.author}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
