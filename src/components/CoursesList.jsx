import React from "react";
import courses from "../data/courses";
import CoursesCard from "./component/CoursesCard";

const CoursesList = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-y-4 mt-1 py-4 ">
        {courses.map((item, index) => (
          <div
            key={index}
            className="w-full px-2 xs:px-4 md:w-[48%] md:px-0 lg:w-[32%]"
          >
            <CoursesCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CoursesList;
