import { AddOutlined } from "@mui/icons-material";
import React from "react";

function IconedButton({ icon, title }) {
  return (
    <div className="border-[2px] text-cyan-400 border-cyan-400 p-1 rounded-md hover:bg-cyan-400 hover:text-white">
      <button className="flex gap-1 justify-center items-center">
        <div>{icon}</div>
        <span>{title}</span>
      </button>
    </div>
  );
}

export default IconedButton;
