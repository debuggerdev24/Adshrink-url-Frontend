import React from "react";
import { socialData } from "../constant/Contant";
import { FaCheck, FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-screen-lg md:px-0 items-center">
        <div className="p-5">
          <h1 className="text-sm text-about-grey">ABOUT</h1>
          <h1 className="text-2xl font-bold mb-4">
            Unleash the power of the link
          </h1>
          <h1 className="text-about-grey text-xs mb-4">
            Only AdShrink allows you to monetize your website without ruining
            the graphics and without using invasive advertising such as pop-ups,
            push notifications and banners. Improve your users experience and
            maximize your profits with the top 1 URL Shortener in the world!
          </h1>
          <h2 className="text-sm text-black-light font-semibold mb-4">
            <span className="text-[#4184f3] uppercase"> How and where </span>
            you can place your links to earn money?
          </h2>
          <div className="flex flex-col mb-10">
            {socialData.map((social, index) => (
              <div
                key={index}
                className="flex text-sm text-black-light font-semibold items-center gap-2"
              >
                <FaCheck color="#2185d0" />
                {social.name}
              </div>
            ))}
          </div>
          <a
            href="https://adshrink.it/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4184f3] text-white flex justify-center md:justify-start gap-4 w-fit items-center px-3 py-3 rounded-sm"
          >
            Get Our Services <FaArrowRight />
          </a>
        </div>
        <div className="p-5">
          <img
            src="https://adshrink.it/wp-content/uploads/2019/02/ndkejndksjndks.png"
            alt="Unleash the power of the link"
            className="w-full"
          />
        </div>
      </div>
      <div className="m-auto max-w-screen-lg px-4 md:px-0 border-b border-slate-300"></div>
    </>
  );
}

export default About;
