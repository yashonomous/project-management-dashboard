import { GridViewOutlined } from "@mui/icons-material";
import React from "react";

function DataCard({ logo, count, title }) {
  return (
    <div
      className={`${
        title === "Delayed" ? "bg-red-300" : " bg-white"
      } flex-1 flex flex-col gap-4 shadow-lg py-2 rounded-sm`}
    >
      {/* icon */}
      <div
        className={`${
          title === "Delayed" ? "text-red-700" : "text-cyan-400"
        } flex text-3xl `}
      >
        {logo}
      </div>
      {/* count */}
      <div
        className={`${
          title === "Delayed" ? "text-white" : "text-black"
        } flex justify-center text-4xl font-bold`}
      >
        <span>{count}</span>
      </div>
      {/* text */}
      <div
        className={`${
          title === "Delayed" ? "text-white" : "text-black"
        } flex justify-center`}
      >
        <span>{title}</span>
      </div>
    </div>
  );
}

export default DataCard;
