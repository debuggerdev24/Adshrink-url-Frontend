import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaRegBookmark,
  FaArrowRight,
  FaGem,
  FaComments,
  FaShare,
  FaRegHeart,
  FaRegNewspaper,
  FaList,
  FaCheck,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import StepsContent from "./StepsContent";

const PreviewModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStepOne, setIsStepOne] = useState(false);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [countdown, setCountdown] = useState(7);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [countdownsteptwo, setCountdownsteptwo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [IsLoaderOne, setIsLoaderOne] = useState(true);
  const [IsLoaderTwo, setIsLoaderTwo] = useState(true);

  useEffect(() => {
    let timer;
    if (isStepOne && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 700);
    } else if (countdown === 0) {
      setCountdownFinished(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, isStepOne]);
  //
  useEffect(() => {
    let timer;
    if (countdownsteptwo && countdownFinished && isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [countdownsteptwo, countdownFinished, isLoading]);
  useEffect(() => {
    let timer;
    if (isStepOne && IsLoaderOne)
      timer = setTimeout(() => {
        setIsLoaderOne(false);
      }, 500);

    return () => clearTimeout(timer);
  }, [isStepOne, IsLoaderOne]);
  useEffect(() => {
    let timer;
    if (isStepTwo && IsLoaderTwo)
      timer = setTimeout(() => {
        setIsLoaderTwo(false);
      }, 500);

    return () => clearTimeout(timer);
  }, [isStepTwo, IsLoaderTwo]);

  const handleClose = () => {
    if (countdown <= 0) {
      setIsStepOne(false);
    }
    setCountdown(7);
  };
  return (
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
              <a className="flex items-center gap-2 text-xs border hover:border-white border-about-grey p-1 ">
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
          {isModalOpen ? (
            <>
              {countdownsteptwo && countdownFinished ? (
                <>
                  {!isLoading ? (
                    <>
                      <div className="bg-[#4184f3] w-full hover:bg-[#1e70bf] font-extralight flex justify-between items-center text-white rounded cursor-pointer">
                        <p className="font-thin mx-auto text-center">
                          Continue(1/1)
                        </p>
                        <p className="flex p-2 items-center bg-blue-400">
                          <FaArrowRight className="ml-2" />
                        </p>
                      </div>

                      <a
                        className="bg-green-400 w-full font-extralight flex justify-between items-center text-white rounded cursor-pointer"
                        href="https://t.me/adshrink_bot/?start=artcode-PSAREL"
                        target="_blank"
                      >
                        <div className="p-2  font-norma text-center flex-1 text-xl ml-14">
                          Direct Access Telegram
                        </div>
                      </a>
                      <a className="text-blue-400 text-xs hover:text-[#1e70bf] ">
                        Leave a comment..
                      </a>
                    </>
                  ) : (
                    <button className="bg-green-400 w-full p-1 font-extralight flex justify-between items-center text-white rounded">
                      <p className="font-bold text-lg flex-1">Loading ...</p>
                      <div
                        className="flex p-4 items-center 
                     bg-green-500 spin"
                      ></div>
                    </button>
                  )}
                </>
              ) : (
                <>
                  <button
                    className={`${
                      countdownFinished ? "bg-green-500" : "bg-white"
                    } text-sm cursor-pointer   flex items-center justify-center text-black rounded`}
                    onClick={() =>
                      countdownFinished
                        ? setIsStepOne(false)
                        : setIsStepOne(true)
                    }
                  >
                    <p className="px-8 text-lg text-black-light">
                      Step One ({countdownFinished ? "1/1" : "0/1"})
                    </p>
                    <div className="flex p-4 items-center bg-light-grey">
                      {countdownFinished ? (
                        <FaCheck fontSize={20} className="ml-1" />
                      ) : (
                        <FaRegNewspaper
                          fontSize={20}
                          color="grey"
                          className="ml-1"
                        />
                      )}
                    </div>
                  </button>
                  <button
                    className={`${
                      countdownsteptwo ? "bg-green-500" : "bg-white"
                    } text-sm cursor-pointer   flex items-center justify-center text-black rounded`}
                    onClick={() =>
                      countdownsteptwo
                        ? setIsStepTwo(false)
                        : setIsStepTwo(true)
                    }
                  >
                    <p className=" px-8 text-lg text-black-light">
                      {countdownsteptwo ? "Step Two (1/1)" : "Step Two (0/1)"}
                    </p>
                    <div className="flex p-4 items-center bg-light-grey">
                      {countdownsteptwo ? (
                        <FaCheck fontSize={20} className="ml-1" />
                      ) : (
                        <FaList fontSize={20} color="grey" className="ml-1" />
                      )}
                    </div>
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <button
                className="bg-green-400 w-full font-extralight flex justify-between items-center text-white rounded cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="p-2 font-normal flex-1 text-lg ml-14">
                  Click here to Continue
                </div>
                <div className="flex p-4 items-center bg-green-500">
                  <FaArrowRight className="ml-2" />
                </div>
              </button>
              <div className="bg-[#4184f3] text-sm cursor-pointer p-1 w-full flex items-center justify-center text-white rounded">
                <p className="p-1 font-normal">Premium Access</p>
              </div>
            </>
          )}

          {isStepOne && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
              <div className="modal bg-white rounded-lg w-8/12  h-5/6 relative">
                <div className="flex justify-between p-4 bg-blue-500 px-8 items-center mb-4">
                  <h2 className="text-xl text-white font-bold rounded">
                    Discover interesting articles
                  </h2>
                  <button
                    className="text-white hover:text-gray-700"
                    onClick={handleClose}
                  >
                    {countdown > 0 ? (
                      <span className="text-white font-bold text-2xl">
                        ..{countdown}
                      </span>
                    ) : (
                      <div className="flex items-center">
                        <IoCloseSharp
                          className="text-4xl hover:text-green-500"
                          fontSize={30}
                        />
                      </div>
                    )}
                  </button>
                </div>
                {IsLoaderOne ? (
                  <div className="text-center text-slate-500 flex flex-col w-fit pt-[150px] m-auto items-center text-lg font-semibold">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-12 h-12 px-2 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
                    Loading...
                  </div>
                ) : (
                  <p className="text-center  text-lg font-semibold"></p>
                )}
              </div>
            </div>
          )}
          {isStepTwo && (
            <div className="fixed inset-0 z-50 p-5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 h-full"></div>
              <div className="modal bg-white rounded-lg w-full md:w-8/12 h-full overflow-auto relative">
                <div className="flex justify-between p-4 bg-blue-500 px-8 items-center mb-4">
                  <h2 className="text-xl text-white text-center font-bold rounded">
                    Discover relating topics
                  </h2>
                </div>
                {IsLoaderTwo ? (
                  <div className="text-center text-slate-500 flex flex-col w-fit pt-[150px] m-auto items-center text-lg font-semibold">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-12 h-12 px-2 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
                    Loading...
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <div className="hidden md:block w-1/5">
                      <img src="https://adshnk.com/src/img/right-row.svg" />
                    </div>
                    <div className=" w-full md:w-3/5 2xl:w-[600px] shadow-lg shadow-gray-200 rounded-sm border my-3 border-slate-200">
                      <StepsContent
                        setIsStepTwo={setIsStepTwo}
                        setCountdownsteptwo={setCountdownsteptwo}
                      />
                    </div>
                    <div className="hidden md:block w-1/5">
                      <img src="https://adshnk.com/src/img/left-row.svg" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
