import React, { useEffect, useState } from "react";
import CoursesList from "../components/CoursesList";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck, FaStar } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const Courses = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const [filterRatingOpen, setFilterRatingOpen] = useState(true);
  const [filterChaptersOpen, setFilterChaptersOpen] = useState(false);
  const [filterCategoryOpen, setFilterCategoryOpen] = useState(false);

  useEffect(() => {
    const isFilterOpen = () => {
      if (window.innerWidth < 1100) {
        setFilterOpen(false);
      } else {
        setFilterOpen(true);
      }
    };
    isFilterOpen();

    window.addEventListener("resize", isFilterOpen);
    return () => window.removeEventListener("resize", isFilterOpen);
  }, []);

  return (
    <>
      <section className="my-[1rem]">
        <div className="container">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">All Courses</h2>
            <h3 className="text-lg font-semibold">Choose by yourself</h3>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="px-3 py-2 border-2 border-slate-300 rounded-lg"
            >
              <span className="flex items-center gap-x-1">
                <IoFilter className="text-lg" />
                Filter
              </span>
            </button>
            <div className="flex items-center gap-x-2">
              <span className="font-medium">Sort by</span>
              <select
                className="py-2 px-1 rounded-lg border-2 border-slate-300 bg-transparent font-medium focus:outline-none"
                name=""
                id=""
              >
                <option value="">Relevance</option>
                <option value="">Name</option>
                <option value="">Price to high</option>
                <option value="">Price to hlow</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            <div
              className={`w-full bg-red- overflow-y-scroll lg:overflow-y-hidden ${
                filterOpen
                  ? "h-[21rem] lg:h-full lg:w-[14rem] xl:w-[20rem]"
                  : "h-0 lg:w-0"
              } transition-all duration-300 ease-in-out`}
            >
              {/* filter menu start */}
              <div className="p-5 lg:p-0 lg:py-5 lg:pe-5">
                <div className="space-y-1">
                  <button
                    onClick={() => setFilterRatingOpen(!filterRatingOpen)}
                    className={`w-full p-2 flex justify-between items-center ${
                      filterRatingOpen ? "bg-gray-100" : ""
                    }`}
                  >
                    <p className="font-semibold">Rating</p>
                    <IoIosArrowDown
                      className={`text-xl ${
                        filterRatingOpen ? "rotate-180" : ""
                      } transition-all duration-300 ease-in-out`}
                    />
                  </button>
                  <hr />
                  <div
                    className={`space-y-1 overflow-hidden ${
                      filterRatingOpen ? "max-h-[14rem]" : "max-h-0"
                    } transition-all duration-300 ease-in-out`}
                  >
                    <form className="p-2">
                      {[5, 4, 3, 2, 1].map((item, index) => (
                        <label
                          key={index}
                          htmlFor={item}
                          className="w-full cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="payment"
                            id={item}
                            className="hidden peer"
                            value={item}
                          />
                          <div className="form-group flex gap-x-3 items-center w-full px-3 py-2 border-[1px] border-transparent rounded-lg peer-checked:border-primary peer-checked:bg-blue-50 transition-all duration-200">
                            <div className="flex items-center gap-x-2">
                              {[1, 2, 3, 4, 5]
                                .slice(0, item)
                                .map((_, index) => (
                                  <FaStar
                                    key={index}
                                    className="text-lg text-yellow-300"
                                  />
                                ))}
                            </div>
                          </div>
                        </label>
                      ))}
                    </form>
                  </div>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => setFilterChaptersOpen(!filterChaptersOpen)}
                    className={`w-full p-2 flex justify-between items-center ${
                      filterChaptersOpen ? "bg-gray-100" : ""
                    }`}
                  >
                    <p className="font-semibold">Chapters</p>
                    <IoIosArrowDown
                      className={`text-xl ${
                        filterChaptersOpen ? "rotate-180" : ""
                      } transition-all duration-300 ease-in-out`}
                    />
                  </button>
                  <hr />
                  <div
                    className={`space-y-1 overflow-hidden ${
                      filterChaptersOpen ? "max-h-[14rem]" : "max-h-0"
                    } transition-all duration-300 ease-in-out`}
                  >
                    <form className="p-2 space-y-2">
                      {["1-10", "10-15", "15-20", "20-25", "25+"].map(
                        (item, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input type="checkbox" className="peer hidden" />
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-md flex items-center justify-center overflow-hidden peer-checked:bg-blue-500 peer-checked:border-blue-500">
                              <FaCheck className="text-white" />
                            </div>
                            <span className="font-semibold">{item}</span>
                          </label>
                        )
                      )}
                    </form>
                  </div>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => setFilterCategoryOpen(!filterCategoryOpen)}
                    className={`w-full p-2 flex justify-between items-center ${
                      filterCategoryOpen ? "bg-gray-100" : ""
                    }`}
                  >
                    <p className="font-semibold">Category</p>
                    <IoIosArrowDown
                      className={`text-xl ${
                        filterCategoryOpen ? "rotate-180" : ""
                      } transition-all duration-300 ease-in-out`}
                    />
                  </button>
                  <hr />
                  <div
                    className={`space-y-1 overflow-hidden ${
                      filterCategoryOpen ? "max-h-[14rem]" : "max-h-0"
                    } transition-all duration-300 ease-in-out`}
                  >
                    <form className="p-2 space-y-2">
                      {[
                        "Art & Design",
                        "Business",
                        "Languages",
                        "Math",
                        "Programming",
                        "Science",
                      ].map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input type="checkbox" className="peer hidden" />
                          <div className="w-6 h-6 border-2 border-gray-400 rounded-md flex items-center justify-center overflow-hidden peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <FaCheck className="text-white" />
                          </div>
                          <span className="font-semibold">{item}</span>
                        </label>
                      ))}
                    </form>
                  </div>
                </div>
              </div>
              {/* filter menu end */}
            </div>
            <div className="w-full">
              <CoursesList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
