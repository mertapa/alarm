import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="nav mt-3 border-bottom mb-4">
      <Link to={"/"}>
        <button class="nav-link ">Home</button>
      </Link>
      <Link to={"/alarmlist"}>
      <button class="nav-link">Alarm List</button>
      </Link>
      <Link to={"/addalarm"}>
      <button class="nav-link">Add Alarm</button>
      </Link>
    </nav>
  );
};

export default Header;
