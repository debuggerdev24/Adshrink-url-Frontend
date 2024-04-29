import React, { useRef, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BiSolidMessageRounded } from "react-icons/bi";
import Information from "./Information";

const Page = () => {
  const [isCaptchaPassed, setIsCaptchaPassed] = useState(false);
  const captchaRef = useRef(null);

  const handleVerify = (token) => {
    // console.log("hCaptcha token:", token);
    setIsCaptchaPassed(true);
  };

  useEffect(() => {
    const siteKey = "c5b81c6c-8f62-4ae7-944f-e0ea5b824847";
    const widgetId = window.hcaptcha?.render(captchaRef.current, {
      sitekey: siteKey,
      callback: handleVerify,
    });
    return () => {};
  }, []);

  return (
    <>
      {!isCaptchaPassed && (
        <div className="mainContainer flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 p-7">
            <h2 className="header font-bold text-2xl">🤖 One more step</h2>
            <p className="text-[15px] font-normal text-gray-400">
              Please complete the security check
            </p>

            <div className="m-3">
              <ul className="list-disc text-red-400">
                <li className="text-sm">
                  Accept data processing in order to show advertising.
                </li>
              </ul>
              <a href="#" className="text-blue-300 text-sm">
                Click here to accept
              </a>
            </div>
            <div
              id="captcha"
              className="w-full md:w-1/2"
              ref={captchaRef}
            ></div>
          </div>
          <div className="w-full md:w-[500px] p-4 pl-0 lg:pl-32 flex flex-col justify-center">
            <div className="bg-white border rounded-lg ml-9 shadow-sm">
              <div className="flex justify-between p-4 border-b items-center">
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://adshrink.it/wp-content/uploads/apps/nouser.jpg"
                    alt="User"
                  />
                  <span className="text-sm text-gray-600">PSArips</span>
                </div>
                <div className="text-gray-300 text-sm">a few seconds ago</div>
              </div>
              <div className="flex justify-between p-4 items-center">
                <div className="flex items-center">
                  <BiSolidMessageRounded className="mr-2" fontSize={20} />
                  <span className="text-sm text-gray-600">10+ comments</span>
                </div>
                <div className="flex items-center">
                  <CiHeart className="mr-2 hover:text-red-700" fontSize={20} />
                  <span className="text-sm text-gray-600">99+ likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCaptchaPassed && <Information />}
    </>
  );
};

export default Page;
