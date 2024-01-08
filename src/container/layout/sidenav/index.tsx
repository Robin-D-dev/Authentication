import { NavLink } from "react-router-dom";
import "../../../assets/stylesheets/layout/side-nav.scss";
import React from "react";



const SideNav : React.FC = () => {
  return (
    <nav className="side-nav">
      <NavLink to="/app/dashboard">Dashboard</NavLink>
      <NavLink to="/app/products">Product</NavLink>
    </nav>
  );
}

export default SideNav;