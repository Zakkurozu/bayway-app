import React from "react";
import { GrCertificate } from "react-icons/gr";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
