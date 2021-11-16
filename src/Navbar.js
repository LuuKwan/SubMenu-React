import React from "react";
import logo from "./images/logo.svg";
import sublinks from "./data";
import Submenu from "./Submenu";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect();
    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains(`link-btn`)) {
      closeSubMenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={displaySubMenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
