import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import ProfileBox from "./ProfileBox";
import { MdChat } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiFriendicaFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="w-full  flex justify-between px-10 py-2 bg-[#f9f9f9]">
      <div className="w-1/2 flex justify-start items-center gap-8">
        <div className="text-xl font-semibold text-[#2989c4]">
          {/* <img className="w-10 " src="./logo.png" /> */}C
          <span className="font-bold text-[#d54343]">Room</span>
        </div>
        <div className="relative">
          <IoSearch className="absolute left-5 text-[#918f8f] text-[1.2em] top-1/2 -translate-y-1/2" />
          <input
            placeholder="Search Friends"
            className="w-60 px-11 py-2 bg-[#54545412] border-0 border-[#838282] rounded-full"
            type="text"
          />
        </div>
      </div>

      <nav className="w-1/2 flex items-center justify-evenly   gap-3 ">
        <NavLink
          className="w-full py-2 flex items-center justify-center rounded-xl text-2xl text-center"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#1655b4" : "#565555",
            backgroundColor: isActive ? "#4b94e248" : "transparent",
          })}
        >
          <IoHome />
        </NavLink>

        <NavLink
          to="/friends"
          className="w-full py-2 flex items-center justify-center rounded-xl text-2xl text-center"
          style={({ isActive }) => ({
            color: isActive ? "#1655b4" : "#565555",
            backgroundColor: isActive ? "#3070cf6a" : "transparent",
          })}
        >
          <RiFriendicaFill />
        </NavLink>

        <NavLink
          to="/people"
          className="w-full py-2 flex items-center justify-center rounded-xl text-2xl text-center"
          style={({ isActive }) => ({
            color: isActive ? "#1655b4" : "#565555",
            backgroundColor: isActive ? "#3070cf6a" : "transparent",
          })}
        >
          <MdPeopleAlt />
        </NavLink>


        <NavLink
          className="w-full py-2 flex items-center justify-center rounded-xl text-2xl text-center"
          to="/notification"
          style={({ isActive }) => ({
            color: isActive ? "#1655b4" : "#565555",
            backgroundColor: isActive ? "#3070cf6a" : "transparent",
          })}
        >
          <MdChat />
        </NavLink>
      </nav>

      <div className="w-1/2 flex justify-end items-center">
        <ProfileBox />
      </div>
    </div>
  );
};

export default Header;
