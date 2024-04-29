import React from "react";

const Publish = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto max-w-screen-lg md:px-0 items-center">
        <div className="p-5">
          <div className="flex justify-center">
            <img
              src="https://i.l.inmobicdn.net/website/website/6.0.1/img/publisher-campaign/eCPM.png"
              alt="Publish anywhere, grow everywhere."
              className="w-72 h-72"
            />
          </div>
        </div>
        <div className="p-1">
          <h1 className="text-sm text-white60">MONETIZE</h1>
          <h2 className="text-2xl font-bold mb-4">
            Publish anywhere, grow everywhere.
          </h2>
          <div className="text-gray-500">
            <h3 className="text-lg font-semibold text-[#4184f3]">
              <a href="https://adshnk.com/about/">Learn about Adshrink.it</a>
            </h3>
            <p className="mb-4 text-sm text-grey-description">
              Earn more <b className="text-bold">without</b> adding more{" "}
              <b className="text-bold">ads!</b>
            </p>
            <div className="flex flex-col text-grey-description">
              <div>
                - No minimum traffic requirements, instant account approval
              </div>
              <div>- Lifelong Income Stream</div>
              <div>- Best eCPM rates for Worldwide Traffic</div>
              <div>- Easy to Skip</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-screen-lg px-4 p-5 md:px-0 border-b border-slate-300"></div>
    </>
  );
};

export default Publish;
