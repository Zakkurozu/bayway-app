import React from "react";
import { FaStar } from "react-icons/fa";

const CoursesList = () => {
  const courses = [
    {
      id: 1,
      title: "Beginer's guide to design",
      category: "Art & Design",
      image:
        "https://media.istockphoto.com/id/832112086/photo/young-creative-business-people-meeting-at-office.jpg?s=612x612&w=0&k=20&c=xDwzo3AGNUTiCIUGc-xi_9ENPGYgttDnw91LypD2S1E=",
      author: "Ronald Richards",
      rating: 4.5,
      hours: 22,
      Lectures: 155,
      level: "Beginner",
      price: 120000,
      discount: 15,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore accusamus cumque dolor quisquam commodi quos suscipit, ipsa iure distinctio quo id qui. Aperiam illum sed magnam sunt. Minima, asperiores.",
    },
    {
      id: 2,
      title: "Calculus is actually easy",
      category: "Math",
      image:
        "https://media.istockphoto.com/id/1018041096/photo/mathematics-function-integra-graph-formulas-on-the-chalkboard.jpg?s=612x612&w=0&k=20&c=FTSiJG-obqSScwi99HoPECkzlwKB90xJyVyYNCCqO9E=",
      author: "Jovi Mahendra",
      rating: 4.5,
      hours: 22,
      Lectures: 155,
      level: "Beginner",
      price: 140000,
      discount: 20,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore accusamus cumque dolor quisquam commodi quos suscipit, ipsa iure distinctio quo id qui. Aperiam illum sed magnam sunt. Minima, asperiores.",
    },
    {
      id: 3,
      title: "Mastering Javascript in a month",
      category: "Programming",
      image:
        "https://everyday.codes/wp-content/uploads/2020/01/technology-1283624_1920.jpg",
      author: "Ahma Afrizal",
      rating: 4.5,
      hours: 22,
      Lectures: 155,
      level: "Beginner",
      price: 120000,
      discount: 20,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore accusamus cumque dolor quisquam commodi quos suscipit, ipsa iure distinctio quo id qui. Aperiam illum sed magnam sunt. Minima, asperiores.",
    },
    {
      id: 4,
      title: "Zero to hero Mandarin",
      category: "Languages",
      image:
        "https://media.istockphoto.com/id/853379610/photo/mandarin-learning-new-language-with-fruits-name-flash-cards.jpg?s=612x612&w=0&k=20&c=WBokfT3NfsnpWpJY5v7JvPeKbfgx_3YMiMHxPXtFWCw=",
      author: "Celine Huang",
      rating: 4.5,
      hours: 22,
      Lectures: 155,
      level: "Beginner",
      price: 150000,
      discount: 16,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore accusamus cumque dolor quisquam commodi quos suscipit, ipsa iure distinctio quo id qui. Aperiam illum sed magnam sunt. Minima, asperiores.",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-y-4 mt-1 py-4 ">
        {courses.map((item, index) => (
          <div
            key={index}
            className="w-full px-4 py-2 md:w-[48%] md:px-0 lg:w-[24%]"
          >
            <a className="group" href="">
              <div
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
          </div>
        ))}
      </div>
    </>
  );
};

export default CoursesList;
