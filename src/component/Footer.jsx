import React from "react";
import { FaInfo } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="m-auto max-w-[1150px] px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-4">
          <div className="flex flex-col border-0 border-slate-800 p-2 md:border-r md:col-span-1 md:border-">
            <div className="flex items-center gap-4 my-3">
              <FaInfo fontSize={25} color="white" />
              <span className="font-bold"> Our Services</span>
            </div>
            <div className="flex flex-col  text-gray-400">
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it"
              >
                Real-Time Metrics
              </a>
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it/sign"
              >
                Referral Program
              </a>
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it"
              >
                API
              </a>
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it"
              >
                Add-on
              </a>
            </div>
          </div>

          <div className="flex flex-col border-0 border-slate-800 p-2 md:col-span-1 md:border-r">
            <div className="flex items-center gap-4 my-3">
              <FaInfo fontSize={25} color="white" />
              <span className="font-bold"> Website</span>
            </div>
            <div className="flex flex-col text-gray-400">
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it"
              >
                Login
              </a>
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it/sign"
              >
                Register
              </a>
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it"
              >
                DMCA
              </a>
              <a
                className="p-1 text-sm hover:text-white"
                href="https://www.shrink-service.it"
              >
                Payout Rates
              </a>
            </div>
          </div>

          <div className="block md:block col-span-1 border-r border-slate-800 p-3  md:border-r"></div>

          <div className="flex flex-col border-slate-800 p-1 md:col-span-2 ">
            <div className="flex items-center my-3">
              <h4 className="text-lg font-bold flex gap-4 items-center">
                <FaInfo fontSize={25} color="white" />
                <div className="content">
                  <span className="text-sm"> Adshrink.it</span>
                  <small
                    className="text-xs"
                    style={{
                      textTransform: "uppercase",
                      color: "rgb(201, 201, 201)",
                    }}
                  >
                    {" "}
                    Premium Services
                  </small>
                  <p className="text-xs text-gray-400">
                    Don't waste your time and start skipping all AdShrink Ads.
                  </p>
                </div>
              </h4>
            </div>
            <img
              className="w-36"
              alt="payment"
              src="https://www.chrisbarnespottery.com/image/payment/credit-cards-logos_635.png"
            />
            <div className="flex items-center my-3">
              <h4 className="text-lg font-bold flex gap-4 items-center">
                <FaInfo fontSize={25} color="white" />
                <div className="content">
                  <span className="text-sm"> Adshrink.it</span>
                  <small
                    className="text-xs"
                    style={{
                      textTransform: "uppercase",
                      color: "rgb(201, 201, 201)",
                    }}
                  >
                    {" "}
                    Payout Services
                  </small>
                  <p className="text-xs text-gray-400">
                    We are proud to have the highest rate with really few ads.
                  </p>
                </div>
              </h4>
            </div>
            <img
              className="w-72"
              alt="payment"
              src="https://create.3drap.it/img/payment.png"
            />
          </div>
        </div>
        <div className="border-b border-gray-800"></div>
        <div className="text-center py-4">
          <p className="text-sm ">
            By using our site, you acknowledge that you have read and understand
            our Cookie Policy, Privacy Policy, and our Terms of Service.
          </p>
          <p className="flex justify-center items-center gap-1 text-sm">
            <BsCurrencyBitcoin color="white" fontSize={20} />
            <span>
              Please <span className="font-bold">Donate</span> to this Bitcoin
              address:
              <span className="font-bold">
                1NMMDfb5tn2dqNKcD6CohJzoYWoepdHgUq
              </span>
            </span>
          </p>
          <div className="flex justify-center text-xs my-5 mt-10 text-gray-400 items-center gap-2">
            <a
              className="border-r-2 pe-2 border-gray-400 hover:text-white"
              href="https://adshnk.com/sitemap.xml"
            >
              Site Map
            </a>
            <a
              className="border-r-2 pe-2 border-gray-400 hover:text-white "
              href="https://adshnk.com/contact/"
            >
              Contact Us
            </a>
            <a
              className="border-r-2 pe-2
               border-gray-400 hover:text-white "
              href="https://adshnk.com/terms-2/"
            >
              Terms and Conditions
            </a>
            <a
              className="border-r-2 pe-2 border-gray-400 hover:text-white "
              href="https://adshnk.com/privacy-police/"
            >
              Privacy Policy
            </a>
            <a href="https://adshnk.com">Adshrink.it © 2020</a>
          </div>
          <img
            className="w-24 mx-auto"
            alt="logo"
            src="https://www.shrink-service.it/png/adshrink.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
