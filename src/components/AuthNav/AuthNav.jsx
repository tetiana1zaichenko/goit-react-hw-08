import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(isActive && "text-red-500");
  };
  return (
    <div>
      <nav>
        <NavLink className={setActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/register">
          Registration
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
