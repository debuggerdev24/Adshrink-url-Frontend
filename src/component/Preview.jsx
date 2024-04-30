import React from "react";
import { FaLock, FaHtml5, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaHeading } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { wikiData } from "../constant/Contant";
import PreviewModal from "./PreviewModal";

const Preview = () => {
  return (
    <div className="information grid grid-cols-1 md:grid-cols-4 border-b-2 border-gray-200 bg-white">
      <div className="col-span-1 bg-gray-100 md:col-span-1"></div>

      <div className="col-span-1 md:col-span-3 flex flex-col">
        <div class="bg-white p-6 m-9"></div>
        {/* 1st row */}
        <PreviewModal />
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
