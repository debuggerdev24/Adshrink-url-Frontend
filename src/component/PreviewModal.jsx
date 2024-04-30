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
                  <div className="bg-[#4184f3] w-full font-extralight flex justify-between items-center text-white rounded cursor-pointer">
                    <p className="font-thin ml-14 text-center">Continue(1/1)</p>
                    <div className="flex p-2 items-center bg-blue-400">
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                  <button className="bg-green-400 w-full font-extralight flex justify-between items-center text-white rounded cursor-pointer">
                    <div className="p-2 font-normal text-lg ml-14">
                      Direct Access Telegram
                    </div>
                  </button>
                  <span className="text-blue-400 text-xs ">
                    Leave a comment..
                  </span>
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
                <div className="p-2 font-normal text-lg ml-14">
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

          {/* <div className="bg-[#4184f3] text-sm cursor-pointer p-1 w-full flex items-center justify-center text-white rounded">
          <p className="p-1 font-normal "> Premium Access</p>
        </div> */}
          {isStepOne && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
              <div className="modal bg-white rounded-lg w-8/12 h-5/6 relative">
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
                <p className="text-center h-[200px] w-[500px] text-lg font-semibold"></p>
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
                <div className="flex justify-between">
                  <div className=" w-1/5">
                    <img src="https://adshnk.com/src/img/right-row.svg" />
                  </div>
                  <div className=" w-full md:w-3/5 2xl:w-[600px] shadow-lg shadow-gray-200 rounded-sm border my-3 border-slate-200">
                    <StepsContent
                      setIsStepTwo={setIsStepTwo}
                      setCountdownsteptwo={setCountdownsteptwo}
                    />
                  </div>
                  <div className=" w-1/5">
                    <img src="https://adshnk.com/src/img/left-row.svg" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
