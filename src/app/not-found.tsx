import NotFoundSvg from "@/components/NotFoundSvg";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-lime-100 flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-lime-400">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-lime-400 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-lime-900 my-12">
          Sorry, the page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="flex items-center space-x-2 px-4 py-2 rounded transition duration-150 bg-gradient-to-br  from-lime-300 via-lime-500 to-lime-700 text-lime-50 border-lime-200 hover:bg-gradient-to-tl hover:from-lime-300 hover:via-lime-500 hover:to-lime-700"
          title="Return Home"
        >
          <IoMdArrowRoundBack className="h-5 w-5" />
          <span>Return Home</span>
        </a>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <NotFoundSvg />
      </div>
    </div>
  );
};

export default NotFoundPage;
