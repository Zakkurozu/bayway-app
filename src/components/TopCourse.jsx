import React, { useEffect, useState } from "react";
import courses from "../data/courses";
import CoursesCard from "./component/CoursesCard";

const TopCourse = () => {
  const [listView, setListView] = useState(4);

  useEffect(() => {
    const viewList = () => {
      if (window.innerWidth >= 1024 && window.innerWidth < 1240) {
        setListView(3);
      } else {
        setListView(4);
      }
    };
    viewList();

    window.addEventListener("resize", viewList);
    return () => window.removeEventListener("resize", viewList);
  }, []);
  console.log(listView);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-y-4 mt-1 py-4 ">
        {courses.slice(0, listView).map((item, index) => (
          <div
            key={index}
            className="w-full px-2 xs:px-4 py-2 md:w-[48%] md:px-0 lg:w-[32%] xl:w-[24%]"
          >
            <CoursesCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCourse;
