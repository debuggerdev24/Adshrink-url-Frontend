import React from "react";
import { FaBookmark } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <nav className="nav flex p-5 py-4 ">
        <div>
          <img
            data-src="https://adshnk.com/wp-content/uploads/2021/10/adshnk.png"
            src="https://adshnk.com/wp-content/uploads/2021/10/adshnk.png"
            className="w-28"
            data-ll-status="loaded"
            alt="Logo"
          />
        </div>
        <div className="flex justify-between gap-0 ml-auto md:gap-7 items-center space-x-4">
          <div>
            <FaBookmark color="white" />
          </div>
          <div className="flex justify-around bg-white rounded p-1.5 items-center w-36 md:w-44">
            <input
              type="text"
              placeholder="Search content"
              className="w-full px-2 font-custom focus:outline-none"
            ></input>
            <button className="shadow-inset p-1.5 rounded-full">
              <FaSearch color="grey" />
            </button>
          </div>
          <div className="text-white">English</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
