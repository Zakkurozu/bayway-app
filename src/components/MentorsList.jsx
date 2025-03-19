import React from "react";
import { FaStar } from "react-icons/fa";

const MentorsList = () => {
  const mentors = [
    {
      id: 1,
      name: "Jovi Mahendra",
      image:
        "https://st3.depositphotos.com/1177973/15033/i/450/depositphotos_150339232-stock-photo-handsome-asian-teacher.jpg",
      major: "Math Teacher",
      rating: 4.5,
      students: 1500,
      icon: "asd",
    },
    {
      id: 2,
      name: "Ronald Richards",
      image:
        "https://st3.depositphotos.com/5192617/12637/i/950/depositphotos_126371614-stock-photo-happy-asian-man.jpg",
      major: "UI/UX Designer",
      rating: 4.7,
      students: 1100,
      icon: "asd",
    },
    {
      id: 3,
      name: "Ahma Afrizal",
      image:
        "https://i.pinimg.com/736x/c1/bb/31/c1bb312b77fbff86fb521ebb4c4c88f3.jpg",
      major: "Fullstack Developer",
      rating: 4.4,
      students: 875,
      icon: "asd",
    },
    {
      id: 4,
      name: "Celine Huang",
      image:
        "https://img.freepik.com/premium-photo/close-up-beautiful-asian-woman-looking-charming-smiling-camera-white-background-young-pretty-asian-girl-posing_574295-5984.jpg?w=360",
      major: "Mandarin Teacher",
      rating: 4.9,
      students: 850,
      icon: "asd",
    },
    {
      id: 5,
      name: "Mythia Jesslyn",
      image:
        "https://images.pexels.com/photos/9988951/pexels-photo-9988951.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
      major: "Digital Ilustrator",
      rating: 4.9,
      students: 770,
      icon: "asd",
    },
  ];

  return (
    <>
      <div
        className="flex mt-1 py-2 w-full max-w-[100%] items-center overflow-x-scroll 
          lg:overflow-x-hidden lg:justify-between"
      >
        {mentors.map((item, index) => (
          <div
            key={index}
            className="w-full py-2 md:w-[48%] md:px-0 lg:w-[19%]"
          >
            <a className="group" href="">
              <div
                className="flex w-[13rem] me-6 my-2 p-5 items-center justify-center border-2 border-gray-300 rounded-xl
                md:py-5
                lg:w-full
                group-hover:border-primary group-hover:bg-[#e0f2fe] transition-all duration-300 ease-in-out"
              >
                <div className="space-y-2 w-full text-center">
                  <div className="w-[7rem] h-[7rem] mx-auto rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-lg text-secondary font-semibold">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">{item.major}</p>
                  </div>
                  <hr className="border-[1px]" />
                  <div className="w-full flex justify-between">
                    <div className="flex items-center gap-x-1">
                      <FaStar className="text-lg text-yellow-300" />
                      <p className="text-xs font-semibold">{item.rating}</p>
                    </div>
                    <p className="text-sm font-semibold">
                      {item.students} Students
                    </p>
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

export default MentorsList;
