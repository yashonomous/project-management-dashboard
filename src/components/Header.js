import { NotificationsOutlined, PersonOutlined } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
  const navItems = [
    "Dashboard",
    "Projects",
    "Team",
    "Clients",
    "Time",
    "Reports",
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className="flex justify-between bg-slate-700 text-white h-16">
      {/* left */}
      <div className="flex ml-6 items-center gap-2 font-semibold text-xl">
        <span className="text-cyan-500">H</span>
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>S</span>
      </div>
      {/* middle */}
      <div className="flex gap-4 items-center justify-between">
        {navItems.map((item) => (
          <div className="hover:border-b-[2px] hover:border-b-cyan-500">
            <span>{item}</span>
          </div>
        ))}
      </div>
      {/* right */}
      <div className="flex gap-4 items-stretch mr-6  ">
        <div className="flex justify-center items-center">
          <NotificationsOutlined className="text-3xl" />
        </div>
        <div className="flex justify-center items-center ">
          <PersonOutlined className="text-5xl bg-slate-400 rounded-full" />
        </div>

        {/* TODO: improve hover functionality */}

        <div
          className="flex justify-center items-center text-xl "
          onMouseOver={(e) => {
            setAnchorEl(e.currentTarget);
          }}
          onMouseOut={() => {
            console.log("out");
            setAnchorEl(null);
          }}
        >
          <span>Mario</span>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={(event) => {
                console.log("clicked " + event.currentTarget.innerText);
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={(event) => {
                console.log("clicked " + event.currentTarget.innerText);
              }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={(event) => {
                console.log("clicked " + event.currentTarget.innerText);
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
