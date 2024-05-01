import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const StepsContent = ({ setIsStepTwo, setCountdownsteptwo }) => {
  const [active, setActive] = useState(1);
  const [activeFlag, setActiveFlag] = useState(false);
  const [isloding, setIsloading] = useState(false);

  const startStepSequence = () => {
    if (activeFlag === false) {
      setIsloading(true);
      setActiveFlag(true);
      setActive(2);
      setTimeout(() => {
        setActive(3);
      }, 10000);

      setTimeout(() => {
        setActive(4);
        setActiveFlag(false);
        setCountdownsteptwo(true);
        // setIsStepTwo(false);
      }, 15000);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (active === 4) {
        setIsStepTwo(false);
      }
    }, 700);
  }, [active]);

  return (
    <div className="instructions">
      <img
        src="https://adshnk.com/src/img/search-adblock.gif"
        alt="steps"
        style={{ width: "100%" }}
      />
      <div className="Stepdata py-10 px-0 md:px-12 flex justify-center flex-col gap-5 ">
        {/* Your content here */}
        <div className="flex justify-center items-center m-0 md:m-auto">
          {/* active step-1 */}
          <div>
            <span
              className="inline-block h-4 leading-4 relative align-middle w-14"
              style={{ verticalAlign: "center", fontSize: "23px" }}
              data-step="1"
            >
              {active === 1 ? (
                <i className="fal fa-circle-notch fa-spin fa-stack-2x"></i>
              ) : (
                <i
                  className="fal fa-circle fa-stack-2x"
                  style={{ color: active > 1 ? "#13dc74" : "" }}
                ></i>
              )}
              <i
                className="fal fa-mouse-pointer fa-stack-1x fa-sm"
                style={{ color: active > 1 ? "#13dc74" : "" }}
              ></i>
            </span>
          </div>

          <div className="grow shrink-0 mx-[1%] max-w-[10%] md:max-w-[40%] min-w-[10px] h-[2px] bg-gray-500 md:mx-[5%] inline-block w-[80%]"></div>

          {/* active step-2 */}
          <div>
            <span
              className="inline-block h-4 leading-4 relative align-middle w-14"
              style={{ verticalAlign: "center", fontSize: "23px" }}
              data-step="2"
            >
              {active === 2 ? (
                <i className="fal fa-circle-notch fa-spin fa-stack-2x"></i>
              ) : (
                <i
                  className="fal fa-circle fa-stack-2x"
                  style={{ color: active > 2 ? "#13dc74" : "" }}
                ></i>
              )}

              <i
                className="fal fa-puzzle-piece fa-stack-1x fa-sm"
                style={{ color: active > 2 ? "#13dc74" : "" }}
              ></i>
            </span>
          </div>

          <div className="grow shrink-0 mx-[1%] max-w-[10%] md:max-w-[40%] min-w-[10px] h-[2px]  bg-gray-500 md:mx-[5%] inline-block w-[80%]"></div>
          {/* active step-3 */}
          <div>
            <span
              className="inline-block h-4 leading-4 relative align-middle w-14"
              style={{ verticalAlign: "center", fontSize: "23px" }}
              data-step="3"
            >
              {active === 3 ? (
                <i className="fal fa-circle-notch fa-spin fa-stack-2x"></i>
              ) : (
                <i
                  className="fal fa-circle fa-stack-2x"
                  style={{ color: active > 3 ? "#13dc74" : "" }}
                ></i>
              )}
              <i
                className="fal fa-check fa-stack-1x fa-sm"
                style={{ color: active > 3 ? "#13dc74" : "" }}
              ></i>
            </span>
          </div>
        </div>

        <div className="flex justify-between w-full px-2">
          <div className="flex-1 text-center">
            <span className="text-sm">Click the button</span>
          </div>
          <div
            className="flex-1 text-center"
            style={{ padding: "0px 0px 0px 10px" }}
          >
            <span className="text-sm">Click on the first Ad Search</span>
          </div>
          <div
            className="flex-1 text-center"
            style={{ padding: "0px 0px 0px 10px" }}
          >
            <span className="text-sm">Don't close the AD page!</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-center font-bold w-72">
            Discover Interesting Ad-Searches
          </p>
          <p className="text-sm p-4 text-center">
            Click on the first Ad Search, don't close the page, come back here
            and verify the click.
          </p>
          <a
            className={`bg-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-inner hover:border-opacity-30 hover:border-black hover:inset-0
           font-extralight flex ${
             isloding
               ? "justify-center w-full py-1 cursor-not-allowed"
               : "justify-end w-fit pl-12 "
           }  items-center  text-white rounded cursor-pointer `}
            onClick={startStepSequence}
          >
            {isloding ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-10 h-10 px-2 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                <h2 className="text-sm md:text-base  text-white rounded">
                  Discover and Click on the Search Ad
                </h2>
                <div className="flex p-4 items-center bg-blue-500">
                  <FaArrowRight className="ml-2" />
                </div>
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default StepsContent;
