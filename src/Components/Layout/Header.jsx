import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo1 from "../../assets/logo3.jpeg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="container-fluid navbar navbar-expand-lg headerBg">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo1} alt="Logo" className="headLogo col-md-2" />
        </NavLink>

        {/* Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <span className="close-icon">✖</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse col-md-10  ${
            menuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto headerLinks ">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              // { to: "/term-conditions", label: "Term & Conditions" },
              // { to: "/private-policy", label: "private-policy" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Login & Register inside Menu */}
          {/* <ul className="d-flex gap-3 d-lg-none d-xl-none ">
              <li className="nav-item">
                <NavLink to="/login" className="navBtn" onClick={closeMenu}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="navBtn" onClick={closeMenu}>
                  Register
                </NavLink>
              </li>
            </ul> */}

          {/* <div className="navbar-nav d-flex justify-content-end gap-2 navLog2  ">
            <NavLink to="/login" className="navBtn">
              Login
            </NavLink>
            <NavLink to="/register" className="navBtn">
              Register
            </NavLink>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
