import React from "react";
import { BiMath } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Math",
      icon: <BiMath />,
    },
    {
      id: 2,
      name: "Art & Design",
      icon: <GiPencilBrush />,
    },
    {
      id: 3,
      name: "Programming",
      icon: <FaCode />,
    },
    {
      id: 4,
      name: "Languages",
      icon: <IoLanguage />,
    },
  ];

  return (
    <>
      <div
        className="flex mt-1 py-2 w-full max-w-[100%] items-center overflow-x-scroll 
          md:overflow-x-hidden md:justify-center"
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="w-[15rem] shrink-0 pe-6 py-2 md:w-1/4 
            md:px-3"
          >
            <a className="group" href="">
              <div
                className="flex items-center justify-center border-2 border-gray-300 p-5 rounded-xl
                md:py-8
                group-hover:border-primary group-hover:bg-[#e0f2fe] transition-all duration-300 ease-in-out"
              >
                <div className="space-y-2 text-center">
                  <div className="bg-[#e0f2fe] w-fit mx-auto p-3 rounded-full group-hover:bg-primary transition-all duration-300 ease-in-out">
                    <div className="text-2xl text-primary group-hover:text-white transition-all duration-300 ease-in-out">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-lg text-secondary font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">11 Courses</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
