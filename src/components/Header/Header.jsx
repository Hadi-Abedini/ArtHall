import React from "react";
import { NavLink } from "react-router-dom";
import textContent from "../../constants/string";

function Header() {
  return (
    <div className="w-full flex justify-center items-center bg-white bg-opacity-15">
      <div className="flex w-3/4 max-w-[1152px] gap-5 py-5">
        <NavLink className="text-white" to={"/"}>
          {textContent.header_taskList_btn}
        </NavLink>
        <NavLink className="text-white" to={"/task"}>
          {textContent.header_addTask_btn}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
