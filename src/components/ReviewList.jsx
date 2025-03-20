import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ReviewList = () => {
  const [slideView, setSlideView] = useState(3);

  useEffect(() => {
    const sizeChange = () => {
      if (window.innerWidth < 640) {
        setSlideView(1);
      } else if (window.innerWidth < 1024) {
        setSlideView(2);
      } else {
        setSlideView(3);
      }
    };
    sizeChange();

    window.addEventListener("resize", sizeChange);
    return () => window.removeEventListener("resize", sizeChange);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold capitalize w-[15rem]">
          What our customer say about us
        </h3>
        <div className="flex items-center gap-x-3">
          <button className="custom-prev bg-slate-400 text-white p-3 rounded-lg hover:bg-slate-600 active:bg-black transition-all duration-200 ease-in-out">
            <FaAngleLeft />
          </button>
          <button className="custom-next bg-slate-400 text-white p-3 rounded-lg hover:bg-slate-600 active:bg-black transition-all duration-200 ease-in-out">
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <Swiper
          slidesPerView={slideView}
          spaceBetween={20}
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full p-2 px-4 md:w-[1/3] md:px-0"
            >
              <div className="bg-white border-[1px] border-slate-300 shadow-sm rounded-xl p-6">
                <div className="space-y-3">
                  <img className="w-[45px]" src="/comma.svg" alt="" />
                  <p>"{item.review}"</p>
                  <div className="flex items-center gap-x-3">
                    <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                      <img
                        className="w-full h-full object-center object-cover"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-slate-400 text-sm font-medium">
                        {item.job}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p></p>
    </>
  );
};

const reviews = [
  {
    id: 1,
    name: "Maria Luther",
    image:
      "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
    job: "Web Designer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias magnam dolorem, harum sint sequi facere reiciendis mollitia delectus quas quos.",
  },
  {
    id: 2,
    name: "John Doe",
    image:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
    job: "Accountant",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias magnam dolorem, harum sint sequi facere reiciendis mollitia delectus quas quos.",
  },
  {
    id: 3,
    name: "Jane Smith",
    image:
      "https://st4.depositphotos.com/13193658/25036/i/450/depositphotos_250363326-stock-photo-smiling-attractive-woman-white-sweater.jpg",
    job: "Data Analyst",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias magnam dolorem, harum sint sequi facere reiciendis mollitia delectus quas quos.",
  },
  {
    id: 4,
    name: "Rebbeca Guzman",
    image: "https://media.sciencephoto.com/image/f0120310/225",
    job: "Scientist",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias magnam dolorem, harum sint sequi facere reiciendis mollitia delectus quas quos.",
  },
  {
    id: 5,
    name: "Gabriel Vormin",
    image:
      "https://img.freepik.com/premium-photo/happy-college-student-with-skateboard-campus_379823-69168.jpg",
    job: "Student",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestias magnam dolorem, harum sint sequi facere reiciendis mollitia delectus quas quos.",
  },
];

export default ReviewList;
