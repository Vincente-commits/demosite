import React from "react";

import "./assets/css/style.css";
import img from "./assets/img/revsite REDONE.jpg";

import "tachyons";

const Header = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div className="header ">
        <header id="header" className="fixed-top ">
          <div className="container d-flex align-items-center justify-content-between ">
            <h1 className="logo">
              <a href="index.js">RevSite</a>
            </h1>

            <a href="index.js" className="logo">
              <img src={img} alt="" className="img-fluid" />
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li onClick={() => onRouteChange("home")}>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="nav-link scrollto"
                    href="#Login"
                    onClick={() => onRouteChange("shop")}
                  >
                    Buy
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => onRouteChange("training")}
                    className="nav-link scrollto"
                    href="#Register"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a className="getstarted scrollto" href="#about">
                    My Account
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </div>
    );
  } else if (!isSignedIn) {
    return (
      <div id="header ">
        <header id="header" className="fixed-top ">
          <div className="container align-items-center justify-content-between ">
            <h1 className="logo">
              <a href="index.js">RevSite</a>
            </h1>

            <a href="index.js" className="logo">
              <img src={img} alt="" className="img-fluid" />
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li onClick={() => onRouteChange("home")}>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="nav-link scrollto"
                    href="#Login"
                    onClick={() => onRouteChange("login")}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => onRouteChange("register")}
                    className="nav-link scrollto"
                    href="#Register"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a className="getstarted scrollto" href="#about">
                    Get Started
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </div>
    );
  }
};

export default Header;
