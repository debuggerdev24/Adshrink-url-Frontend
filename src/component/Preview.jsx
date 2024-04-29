import React from "react";
import {
  FaCheckCircle,
  FaRegBookmark,
  FaArrowRight,
  FaGem,
  FaComments,
  FaShare,
  FaLock,
  FaHtml5,
  FaRegHeart,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { FaHeading } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { wikiData } from "../constant/Contant";

const Preview = () => {
  return (
    <div className="information grid grid-cols-1 md:grid-cols-4 border-b-2 border-gray-200 bg-white">
      <div className="col-span-1 bg-gray-100 md:col-span-1"></div>

      <div className="col-span-1 md:col-span-3 flex flex-col">
        <div class="bg-white p-6 m-9"></div>
        {/* 1st row */}
        <div className="bg-black m-6 md:m-0">
          <div className="grid md:grid-cols-12 p-3 md:p-0 ">
            <div className="md:col-span-3">
              <div className="bg-white p-0">
                <img
                  src="https://www.shrink-service.it/png/search/preview_one.png"
                  alt="preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:col-span-5 p-4 flex items-center">
              <div>
                <h2 className="text-white80 bg-opacity-80">
                  Created <b>4 years ago</b>
                </h2>
                <p className="text-white font-bold flex items-center gap-2">
                  PSArips <FaCheckCircle fontSize={18} color="#4184F3" />
                </p>
                <p className="text-white font-bold flex items-center gap-2">
                  - Continue with the Download{" "}
                  <FaRegBookmark
                    fontSize={15}
                    className="hover:text-blue-400 cursor-pointer"
                    color="#4184F3"
                  />
                </p>
                <div className="flex flex-row mt-7 items-center text-white80  text-white">
                  <a className="flex items-center text-xs gap-2 mx-auto border hover:border-white rounded-l border-about-grey p-1 ">
                    <FaGem fontSize={13} />
                    Support
                  </a>
                  <a className="flex items-center text-xs gap-2 border hover:border-white  border-about-grey  p-1 ">
                    <FaRegHeart fontSize={13} color="white" />
                    Like
                  </a>
                  <a className="flex items-center gap-2 text-xs border hover:border-white border-about-grey  p-1 ">
                    <FaComments fontSize={13} />
                    Comments
                  </a>
                  <a className="flex items-center gap-2 text-xs border hover:border-white border-about-grey  p-1 rounded-r">
                    <FaShare fontSize={13} />
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex p-0 md:p-2 gap-3 flex-col justify-center items-center">
              <div className="bg-green-400 w-full font-extralight flex justify-between items-center text-white rounded cursor-pointer text">
                <div className="p-2 font-normal text-lg ml-14">
                  {" "}
                  Click here to Continue{" "}
                </div>
                <div className="flex p-4 items-center bg-green-500">
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
              <div className="bg-[#4184f3] text-sm cursor-pointer p-1 w-full flex items-center justify-center text-white rounded">
                <p className="p-1 font-normal "> Premium Access</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 m-44"></div>
        {/* 2nd row */}
        <div className="bg-white p-6">
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-100 p-4 rounded-t-lg">
              <p className="text-sm font-bold flex gap-2 text-white60 items-center">
                <FaHeading />
                Continue with the Download
              </p>
            </div>
            <div className="col-span-1 p-4 md:col-span-1">
              <p className="text-gray-600 text-sm">
                Description not available..
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg">
              <p className="text-xs text-green-500 flex items-center gap-1">
                <FaLock />
                SECURE
                <span className="text-white60 truncate">
                  https://psa.re/exit/A7E9F458D3C6B0E48D8026B406177EEE00/3OxWrlMDm+ktEEO0G...
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* 3rd row */}
        <div className="bg-white p-6">
          <div class="bg-white shadow-md rounded-lg border ">
            <div class=" p-3">
              <h2 class="text-lg font-bold mb-2">
                <span className="flex items-center">
                  <img
                    src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=psa.re"
                    alt="icon"
                    class="w-5 h-5 mr-2"
                  />
                  <span className="text-lg">Description</span>
                  <small class="text-grey-light text-lg ml-2">
                    Product/Service
                  </small>
                </span>
              </h2>
              <div class="text-sm text-white60">
                <b>Description</b> is any type of communication that aims to
                make vivid a place, object, person, group, or other physical
                entity.
                <div>
                  <b>Description</b> is one of four rhetorical
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 border">
              <p class="text-xs text-gray-600 flex  items-center gap-2">
                <IoInformationCircle fontSize={15} color="grey" />
                <span className="text-black-light text-xs">
                  Da{" "}
                  <a
                    href="https://it.wikipedia.org/wiki/Description"
                    class="text-blue-500 "
                  >
                    Wikipedia
                  </a>
                  (
                  <a
                    href="https://creativecommons.org/licenses/by-sa/3.0/"
                    target="_blank"
                    class="text-blue-500"
                  >
                    Creative Commons
                  </a>
                  )
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {wikiData.map((item, index) => (
                <div className="bg-white p-2" key={index}>
                  <div className="text-xs text-gray-600">
                    <h5 className="text-lg font-bold flex gap-1 items-center">
                      <img className="w-10" src={item.icon} alt="icon" />
                      <div className="flex flex-col gap-0">
                        <div className="text-[10px] font-light text-grey-light">
                          {item.domain}
                        </div>
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-black flex items-center gap-1 text-sm truncate"
                        >
                          <FaHtml5 fontSize={12} />
                          <span className="text-clip text-[12px] w-40 overflow-hidden ">
                            {item.title}
                          </span>
                          <FaExternalLinkSquareAlt fontSize={12} />
                        </a>
                        <p className="text-xs font-normal text-white60">
                          {item.description}
                        </p>
                      </div>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 p-4 border">
              <div class="text-xs text-gray-600">
                <p class="text-xs text-black-light flex  items-center gap-2">
                  <FaExternalLinkSquareAlt fontSize={13} color="grey" />
                  Other links of this User
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-6 m-3"></div>
        <p class="text-xs text-black-light text-center p-2">
          Loaded in 0.00n seconds (0.0n% difference)
        </p>
      </div>
    </div>
  );
};

export default Preview;
