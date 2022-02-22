//import { useContext, useState } from "react"
import { useDispatch } from "react-redux";
import "../CSS/Navbar.css";
import { logoutSuccess } from "../Redux/action";

export const Navbar = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutSuccess());
  };

  return (
    <div>
      <div id="navbar">
        <div className="nav_content">
          <div className="search_input">
            <input placeholder="Search"></input>
            <button id="inp_search">
              Search
            </button>
          </div>
          <div>
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};
