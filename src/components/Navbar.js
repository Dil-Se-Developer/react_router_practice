import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {
  const navLinkSyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink style={navLinkSyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkSyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkSyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkSyles} to="/users">
        Users
      </NavLink>
      <NavLink style={navLinkSyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
          <NavLink style={navLinkSyles} to='/login'>
            Login
          </NavLink>
      )}
    </nav>
  );
};
