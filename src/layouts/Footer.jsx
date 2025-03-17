import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary text-white py-8">
        <div className="container">
          <div className="flex flex-wrap justify-between gap-y-5">
            <div className="w-full px-2 lg:w-[40%]">
              <div className="flex items-center mb-3 -ms-2">
                <img src="/logo.svg" alt="logo" className="w-8" />
                <p className="font-medium">BayWay</p>
              </div>
              <p>
                Empowering learners through accessible and engaging online
                education. Byway is a leading online learning platform dedicated
                to providing high-quality, flexible, and affordable educational
                experiences.{" "}
              </p>
            </div>
            <div className="1/2 px-2 lg:w-[15%]">
              <h3 className="text-lg mb-3">Get Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Latest article</a>
                </li>
                <li>
                  <a href="">FAQ.</a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 px-2 lg:w-[15%]">
              <h3 className="text-lg mb-3">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <a href="">Art and design</a>
                </li>
                <li>
                  <a href="">Business</a>
                </li>
                <li>
                  <a href="">IT and Software</a>
                </li>
                <li>
                  <a href="">Language</a>
                </li>
                <li>
                  <a href="">Programming</a>
                </li>
              </ul>
            </div>
            <div className="w-full px-2 lg:w-[30%]">
              <h3 className="text-lg mb-3">Get in touch</h3>
              <div className="flex flex-col gap-y-1 mb-6">
                <p>Address: 123 Comedy street, Fun Nation, FG 1234</p>
                <p>Phone: +(62)456-7890</p>
                <p>Email: baywayedu@webkul.co</p>
              </div>
              <div className="flex justify-center items-center gap-x-5">
                <div className="flex justify-center items-center p-1 rounded-full bg-white group">
                  <a href="">
                    <img
                      src="/facebook.png"
                      className="w-7 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center p-1 rounded-full bg-white group">
                  <a href="">
                    <img
                      src="/github.png"
                      className="w-7 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center p-1 rounded-full bg-white group">
                  <a href="">
                    <img
                      src="/google.png"
                      className="w-7 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center p-1 rounded-full bg-white group">
                  <a href="">
                    <img
                      src="/microsoft.png"
                      className="w-7 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="text-center bg-secondary text-white py-3">
        <p className="text-sm font-semibold">
          Copyright &copy; 2025 BayWay. All right reserverd
        </p>
      </div>
    </>
  );
};

export default Footer;
