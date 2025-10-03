import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo3.jpeg";
import "./footer.css";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import Apple from "../../assets/Apple2.png";
import Android from "../../assets/androd2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  const [activeId, setActiveId] = useState(null);
  const toggleCollapse = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div>
      <div className="container-fluid footerBg ">
        <div className="container  ">
          <div className="row ">
            <div className="col-md-3 my-xl-4  my-lg-4 my-md-3  my-2  ">
              <NavLink to="/">
                <img src={logo1} className="footerLogo" />
              </NavLink>
              <p className="footerp my-3">
                Providing Materials & Services. Building Trust. Shaping
                Tomorrow.
              </p>
              <div className="footerIcon  ">
                <ul className=" d-flex flex-wrap gap-3 p-0 my-2">
                  <li>
                    <Link to="https://www.facebook.com/login/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/https://www.instagram.com/accounts/login">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="https://x.com/i/flow/login">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/login">
                      <FaLinkedin />
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="https://www.youtube.com/account">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3  my-xl-4  my-lg-4 my-md-3   my-2 ">
              <ul className="footer1ul p-0 d-flex gap-2 flex-column ">
                <li className="">
                  <Link to="/" className="my-5">
                    Quick Links
                  </Link>
                </li>

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/private-policy">Private Policy</Link>
                </li>
                <li>
                  <Link to="/term-conditions">Terms And Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4  my-xl-4  my-lg-4 my-md-3   my-2 ">
              <ul className="footer1ull p-0 d-flex gap-2 flex-column">
                <li>
                  <Link to="/contact-us">Contact Info</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="linkColor">mestryCircle@.com</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="linkColor">
                      <FaPhoneAlt size={12} className="me-2" />
                      1-800-890-3030
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="linkColor">
                      <FaPhoneAlt size={12} className="me-2" />
                      79770 90909
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2  my-xl-4  my-lg-4 my-md-3   my-2 ">
              {" "}
              <div className="">
                <NavLink to="/" className="mb-2 ">
                  <img src={Apple} className="img-fluid appleLogo" />
                </NavLink>
                <NavLink to="/" className="mt-2">
                  <img src={Android} className="img-fluid andriodLogo" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 horiRowFooter  "></div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <p className=" footerP my-xl-2  my-lg-23 my-md-1   my-1">
                © 2025, Mestry Circle. All Rights Reserved.
                <p className="">
                  Designed and developed by Ficuslot Innovation Pvt Ltd
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
