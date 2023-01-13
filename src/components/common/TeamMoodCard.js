import { PersonOutlined } from "@mui/icons-material";
import React from "react";

function TeamMoodCard({ name, profile }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div>
          <PersonOutlined className="text-6xl rounded-full bg-slate-300 p-1" />
        </div>
        <div className="flex-1 flex flex-col items-start">
          <span className="text-xl">{name}</span>
          <span className="text-sm text-slate-400">{profile}</span>
        </div>
      </div>
      <div>
        <input className="w-full" type="range" />
      </div>
      <div className="h-1">
        <div className="h-[0.05rem] bg-slate-200  "></div>
      </div>
    </div>
  );
}

export default TeamMoodCard;
