import React from "react";
import { GrCertificate } from "react-icons/gr";
import CategoryList from "../components/CategoryList";
import CoursesList from "../components/CoursesList";
import MentorsList from "../components/MentorsList";
import { FaArrowRight } from "react-icons/fa";
import ReviewList from "../components/ReviewList";
import TopCourse from "../components/TopCourse";

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
              <button className="py-3 px-5 border-2 border-transparent bg-primary text-white font-medium rounded-lg capitalize hover:bg-[#e0f2fe] hover:text-primary hover:border-primary transition-all duration-300 ease-in-out">
                Start your journey
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
          <TopCourse />
        </div>
      </section>
      {/* courses end */}

      {/* mentors start */}
      <section className="my-[2rem]">
        <div className="container">
          <h3 className="text-lg font-semibold">Top Mentors</h3>
          <MentorsList />
        </div>
      </section>
      {/* mentors end */}

      {/* reviews start */}
      <section className="my-[2rem] bg-[#f9fafc] py-[2rem]">
        <div className="container">
          <ReviewList />
        </div>
      </section>
      {/* reviews end */}

      {/* additional section start */}
      <section className="my-[2rem]">
        <div className="container">
          <div className="md:w-[90%] mx-auto space-y-[3rem]">
            <div className="flex flex-wrap items-center gap-y-4">
              <div className="w-full md:w-1/2">
                <div className="relative w-[60%] me-auto md:w-[70%]">
                  <img className="mx-auto" src="/teacher.svg" alt="" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Become an instructor
                  </h3>
                  <p>
                    Instructors from around the world teach millions of students
                    on Byway. We provide the tools and skills to teach what you
                    love.
                  </p>
                  <button className="bg-black border-[1px] border-transparent rounded-lg px-3 py-2 group hover:bg-transparent hover:border-black transition-all duration-300 ease-in-out">
                    <div className="text-white text-base flex items-center gap-x-2 group-hover:text-black transition-all duration-300 ease-in-out">
                      <span className="capitalize">
                        start your instructor journey
                      </span>
                      <FaArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4">
              <div className="w-full md:w-1/2 md:order-2">
                <div className="relative w-[72%] md:ms-auto md:w-[80%]">
                  <img className="mx-auto" src="/student.svg" alt="" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Transform your life through education
                  </h3>
                  <p>
                    Learners around the world are launching new careers,
                    advancing in their fields, and enriching their lives.
                  </p>
                  <button className="bg-black border-[1px] border-transparent rounded-lg px-3 py-2 group hover:bg-transparent hover:border-black transition-all duration-300 ease-in-out">
                    <div className="text-white text-base flex items-center gap-x-2 group-hover:text-black transition-all duration-300 ease-in-out">
                      <span className="capitalize">checkout course</span>
                      <FaArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* additional section end */}
    </>
  );
};

export default Home;
