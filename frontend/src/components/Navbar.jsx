import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { AiOutlinePlusSquare } from "react-icons/ai"; // Replace for the PlusSquareIcon
import "./Navbar.css"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1 className="logo">
          <Link to="/">Murgan Store 🛒</Link>
        </h1>

        <div className="nav-buttons">
          <Link to="/create">
            <button className="icon-button">
              <AiOutlinePlusSquare size={20} />
            </button>
          </Link>
          <button className="icon-button" onClick={toggleColorMode}>
            {darkMode ? <LuSun size={20} /> : <IoMoon size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
