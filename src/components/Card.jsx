import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Card({ course, likedCourses, setLikedCourses }) {
  function handleClick() {
    if (likedCourses.includes(course.id)) {
      // phle se liked hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length === 0) {
        //empty hai
        setLikedCourses([course.id]);
      } else {
        //non empty hai
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.info("Liked Successfully!");
    }
  }

  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
    toast.success("Enrolled Successfully");
  };

  return (
    <div className="w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[32%] h-[350px] sm:h-[450px] mx-auto pb-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:shadow-cyan-500/20  transition-transform duration-300 relative">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.image.alt}
          className="rounded-t-xl"
          loading="lazy"
        />

        <button
          onClick={handleClick}
          className="flex gap-2 text-2xl absolute right-2 -bottom-3 bg-white rounded-full p-2 cursor-pointer hover:scale-110 transition-transform duration-200"
        >
          {likedCourses.includes(course.id) ? (
            <FcLike className="text-3xl" />
          ) : (
            <FcLikePlaceholder className="text-3xl" />
          )}
        </button>
      </div>

      <div className="mt-5 px-5">
        <h3 className="text-xl sm:text-2xl font-medium">{course.title}</h3>

        <p className="mt-2 tracking-wide text-justify italic text-xs sm:text-base">
          {course.description.length > 110
            ? course.description.slice(0, 110) + " ..."
            : course.description}
        </p>
      </div>

      <button
        className={`text-base sm:text-xl mx-auto w-full py-2 absolute bottom-0.5 uppercase font-semibold rounded-lg 
      ${
        enrolled
          ? "bg-green-100 cursor-not-allowed text-black"
          : "cursor-pointer shadow bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 hover:scale-95"
      }`}
        onClick={handleEnroll}
        disabled={enrolled}
      >
        {enrolled ? (
          <div className="flex items-baseline justify-center gap-3">
            Enrolled <FaCircleCheck className="text-lg text-green-600" />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 ">
            <FaGraduationCap className="text-lg text-black" /> Enroll Now
          </div>
        )}
      </button>
    </div>
  );
}
