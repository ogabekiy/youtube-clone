import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu, Mic, Search } from "@mui/icons-material";
import { YTLogo } from "../assets";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  return (
    <nav className="bg-primary top-0 end-0 start-0 fixed w-full py-2 px-5 justify-between flex">
      <div className="flex gap-4 items-center">
        <IconButton color="primary">
          <Menu />
        </IconButton>
        <img src={YTLogo} alt="" />
      </div>
      <div className="flex gap-5 items-center">
        <form className="w-[500px] relative flex">
          <input
            type="text"
            placeholder="Введите запрос"
            className="rounded-s-full border py-2 px-4 placeholder:text-[#686868] border-[#303030] bg-transparent w-full focus:border-blue-500 outline-none"
          />
          <button className="bg-[#222] border border-[#303030] border-s-0 text-white rounded-e-full px-5">
            <Search />
          </button>
        </form>
        <button className="rounded-full w-10 h-10 flex items-center justify-center text-white bg-[#303030]">
          <Mic />
        </button>
      </div>
      <div>
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
