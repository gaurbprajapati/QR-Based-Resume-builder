import "./Footer.css";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social">
          <li>
            {" "}
            <Link to="/">
              <Facebook sx={{ color: "white" }} />
            </Link>{" "}
          </li>
          <li>
            <Link to={"/"}>
              <Instagram sx={{ color: "white" }} />
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/"}>
              <Twitter sx={{ color: "white" }} />
            </Link>{" "}
          </li>
          <li>
            <Link to={"/"}>
              <LinkedIn sx={{ color: "white" }} />
            </Link>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <Link to={"/"} style={{ color: "white" }}>
              Home
            </Link>{" "}
          </li>
          <li>
            <Link to={"/"} style={{ color: "white" }}>
              About
            </Link>{" "}
          </li>
          <li>
            <Link to={"/"} style={{ color: "white" }}>
              Team
            </Link>{" "}
          </li>
          <li>
            <Link to={"/"} style={{ color: "white" }}>
              Contact
            </Link>{" "}
          </li>
        </ul>
        <p>2023 NIET Student Hub | All Rights Reserved </p>
      </footer>
    </>
  );
};

export default Footer;
