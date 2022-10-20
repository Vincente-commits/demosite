import React from "react";

import { useHistory } from "react-router-dom";

import img from "../assets/img/revsiteLogo.png";

export default function LoginHeader({ onRouteChange, isSignedIn }) {
  //browser history
  const history = useHistory();

  return (
    <div className="heade w-100  mt0 bg-washed-green    ">
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
          onClick={() => history.push("/login")}
        >
          Login
        </label>
        <label
          className="ma2 black hover-blue"
          href="/register"
          onClick={() => history.push("/register")}
        >
          Register
        </label>
      </div>
    </div>
  );
}

// export default LoginHeader;
