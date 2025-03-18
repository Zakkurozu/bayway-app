import React from "react";
import { GrCertificate } from "react-icons/gr";
import CategoryList from "../components/CategoryList";
import CoursesList from "../components/CoursesList";

const Home = () => {
  return (
    <>
      {/* hero start */}
      <section className="">
        <div className="container">
          <div className="flex flex-wrap items-center gap-y-6">
            <div className="w-full order-2 md:order-1 md:w-1/2">
              <h1 className="text-xl font-bold w-[80%] mb-3 lg:text-4xl">
                Unlock Your Potential with Bayway
              </h1>
              <p className="mb-3">
                Welcome to Byway, where learning knows no bounds. We believe
                that education is the key to personal and professional growth,
                and we're here to guide you on your journey to success.{" "}
              </p>
              <button className="py-3 px-5 bg-primary text-white font-medium rounded-md">
                Start your instructor journey
              </button>
            </div>
            <div className="w-full order-1 md:order-2 md:w-1/2">
              <div className="relative w-[80%] mx-auto md:mx-0 md:ml-auto md:w-[85%]">
                <img className="object-cover" src="/bg1.svg" alt="" />
                <div className="absolute bottom-7 left-2 bg-white w-fit p-3 shadow-lg rounded-md">
                  <div className="flex gap-x-2">
                    <div className="flex justify-center w-[40px] h-[40px] items-center bg-[#e0f2fe] p-2 rounded-full">
                      <GrCertificate className="text-xl text-[#1e3a8b]" />
                    </div>
                    <div className="w-[7rem] space-y-[5px] pt-1 lg:pt-0 lg:w-[9rem]">
                      <p className="text-xs text-gray-500 lg:text-sm">
                        Number of courses sold
                      </p>
                      <p className="font-medium lg:text-lg">100.000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f9fafc] my-4">
        <div className="container">
          <div className="flex flex-wrap gap-y-3 justify-between items-center">
            <div className="w-[49%] md:w-[23%]">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">250+</h3>
                <p className="text-sm text-gray-600">
                  Courses by our best mentor
                </p>
              </div>
            </div>
            <div className="w-[2%] flex items-center justify-center overflow-hidden">
              <span className="w-[2px] h-[50px] bg-[#e1e8f0]"></span>
            </div>
            <div className="w-[49%] md:w-[23%]">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">1000+</h3>
                <p className="text-sm text-gray-600">
                  Courses by our best mentor
                </p>
              </div>
            </div>
            <div className="w-[2%] hidden md:flex items-center justify-center overflow-hidden">
              <span className="w-[2px] h-[50px] bg-[#e1e8f0]"></span>
            </div>
            <div className="w-[49%] md:w-[23%]">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">15+</h3>
                <p className="text-sm text-gray-600">
                  Courses by our best mentor
                </p>
              </div>
            </div>
            <div className="w-[2%] flex items-center justify-center overflow-hidden">
              <span className="w-[2px] h-[50px] bg-[#e1e8f0]"></span>
            </div>
            <div className="w-[49%] md:w-[23%]">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-semibold">2400+</h3>
                <p className="text-sm text-gray-600">
                  Courses by our best mentor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero end */}

      {/* category start */}
      <section className="my-[2rem]">
        <div className="container">
          <h3 className="text-lg font-semibold">Top Categories</h3>
          <CategoryList />
        </div>
      </section>
      {/* category end */}

      {/* courses start */}
      <section className="my-[2rem]">
        <div className="container">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Top Courses</h3>
            <p>See All</p>
          </div>
          <CoursesList />
        </div>
      </section>
      {/* courses end */}
    </>
  );
};

export default Home;
