import LoadingSvg from "@/components/LoadingSvg";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-lime-100">
      <div
        aria-label="Loading..."
        role="status"
        className="flex justify-center items-center py-[25%]"
      >
        <LoadingSvg />
        <span className="text-4xl font-medium text-lime-500">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
