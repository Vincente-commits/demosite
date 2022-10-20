import React from "react";
import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import img from "../assets/img/revsiteLogo.png";

const DashboardHeader = ({ onRouteChange, isSignedIn }) => {
  //browser history
  const history = useHistory();

  const onLogout = () => {
    //remove all cookies

    Object.keys(Cookies.get()).forEach(function (cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
        // id: user.id,
      };

      Cookies.remove(cookieName, neededAttributes);
    });
  };

  return (
    <div className="heade w-100 mt0 bg-washed-green    ">
      <img
        width="90rem"
        height="55rem"
        src={img}
        alt=""
        className="img-flui ml4 ma3"
      />

      <div className="header-righ fr-l pl4-m pv3 ma2 f5  black">
        <label
          className=" ma2 black hover-blue "
          onClick={() => history.push("/")}
        >
          Home
        </label>

        <label
          className="ma2 black hover-blue"
          onClick={() => history.push("/training")}
        >
          Training
        </label>
        <label
          className="getstarte pa1-m pa2 hover-blue black"
          onClick={() => history.push("/myaccount")}
        >
          My Account
        </label>
        <a className="ma2 black hover-blue" href="/" onClick={onLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default DashboardHeader;
