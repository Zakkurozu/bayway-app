import React from "react";
import { FaStar } from "react-icons/fa";

const CoursesCard = (props) => {
  const { item } = props;

  return (
    <>
      <a className="group" href="">
        <div
          title={item.title}
          className="flex items-center justify-center border-2 border-gray-300 p-4 rounded-xl
                    group-hover:border-primary group-hover:bg-[#e0f2fe] transition-all duration-300 ease-in-out"
        >
          <div className="space-y-4 w-full">
            <div className="w-full h-[12rem] bg-red-100 rounded-lg overflow-hidden md:h-[10rem]">
              <img
                className="w-full h-full object-cover object-center"
                src={item.image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-semibold lg:text-lg line-clamp-1">
                {item.title}
              </p>
              <p className="text-sm font-semibold">By {item.author}</p>
              <p className="text-sm font-medium"></p>
              <div className="flex items-center gap-x-1">
                <FaStar className="text-xl text-yellow-300" />
                <p className="text-sm font-semibold">{item.rating}</p>
              </div>
              <div className="flex gap-3 text-sm font-medium lg:text-xs lg:gap-1">
                <span>{item.hours} Total Hours.</span>
                <span>{item.Lectures} Lectures</span>
                <span>{item.level}</span>
              </div>
              <div className="flex items-center gap-x-2">
                {item.discount === 100 ? (
                  <p className="text-lg text-green-500 font-semibold lg:text-base">
                    Free
                  </p>
                ) : (
                  <p className="text-lg font-semibold lg:text-base">
                    IDR{" "}
                    {(
                      item.price -
                      item.price * (item.discount / 100)
                    ).toLocaleString("id-ID")}
                  </p>
                )}
                {item.discount > 0 && (
                  <div className="flex items-center gap-x-2">
                    <p className="text-sm line-through font-semibold lg:text-xs">
                      IDR {item.price}
                    </p>
                    <div className="border-2 border-green-300 bg-green-200 px-2 rounded-full">
                      <p className="text-xs text-green-500 font-semibold lg:text-[10px]">
                        {item.discount}% Off
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CoursesCard;
