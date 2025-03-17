import React, { useState } from "react";
import {
  FiBell,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { MdCategory } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="shadow-sm md:py-2">
        <div className="container">
          <div className="flex justify-between items-center text-gray1">
            <a href="/">
              <div className="flex items-center">
                <img src="/logo.svg" alt="logo" className="w-8" />
                <p className="font-medium">BayWay</p>
              </div>
            </a>
            <div
              className={`absolute z-[999] bg-white shadow-lg top-14 w-full overflow-hidden ${
                menuOpen ? "scale-y-100" : "scale-y-0"
              } origin-top right-0 px-8 py-7 flex flex-col gap-3 transition-all duration-300 ease-in-out
            md:static md:scale-y-100 md:w-fit md:shadow-none md:p-0 md:flex md:flex-row md:items-center md:gap-3`}
            >
              <h1 className="text-xl font-semibold md:hidden">Menu</h1>
              <hr className="md:hidden" />
              <div
                className="flex items-center gap-x-1 w-full border-2 border-transparent p-2 rounded-md hover:bg-gray-200  hover:border-secondary transition-all duration-200 ease-in-out
              md:p-0 md:w-fit"
              >
                <GoHomeFill className="text-xl md:hidden" />
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={`w-full md:w-fit`}
                >
                  Home
                </NavLink>
              </div>
              <div
                className="flex items-center gap-x-1 w-full border-2 border-transparent p-2 rounded-md hover:bg-gray-200  hover:border-secondary transition-all duration-200 ease-in-out
              md:p-0 md:w-fit"
              >
                <MdCategory className="text-xl md:hidden" />
                <NavLink
                  to="/courses"
                  onClick={() => setMenuOpen(false)}
                  className={`w-full md:w-fit`}
                >
                  Courses
                </NavLink>
              </div>
              <div className="relative mb-3 md:mb-0">
                <input
                  className="font-medium text-gray1 w-full px-9 py-2 border-2 border-gray-500 rounded-lg focus:outline-gray1
                  md:w-[20rem]
                  lg:w-[30rem]"
                  type="text"
                  placeholder="Search courses"
                />
                <FiSearch className="text-xl font-medium text-gray-400 absolute translate-x-[50%] -translate-y-[50%] top-1/2" />
              </div>
              <hr className="md:hidden" />
            </div>
            <div className="flex items-center gap-x-3">
              <button>
                <FiHeart className="text-xl" />
              </button>
              <button>
                <FiShoppingCart className="text-xl" />
              </button>
              <button>
                <FiBell className="text-xl" />
              </button>
              <button className="rounded-full overflow-hidden w-8">
                <img
                  src="https://avatars.githubusercontent.com/u/101083323?v=4&size=64"
                  alt="user.jpg"
                />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden hover:bg-gray-200 transition-all duration-100 ease-in-out"
              >
                {!menuOpen && <FiMenu className="text-2xl" />}
                {menuOpen && <FiX className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
