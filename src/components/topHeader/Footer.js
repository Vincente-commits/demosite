import React, { useRef } from "react";

import useDoubleClick from "use-double-click";
import { useHistory } from "react-router-dom";

export default function Footer({
  onRouteChange,
  isSignedIn,
  props,
  executeScroll,
  executeScroll2,
  executeScroll3,
  executeScroll4,
  executeScroll5,
  executeScroll6,
}) {
  const buttonRef = useRef();
  const buttonRef2 = useRef();

  useDoubleClick({
    onDoubleClick: (e) => (window.location.pathname = "/buy"),
    /** (Required) Dom node to watch for double clicks */
    ref: buttonRef,

    latency: 250,
  });

  useDoubleClick({
    onDoubleClick: (e) => (window.location.pathname = "/verification"),
    /** (Required) Dom node to watch for double clicks */
    ref: buttonRef2,

    latency: 250,
  });

  const history = useHistory();

  return (
    <div className=" w-100 mt0 bg-near-black pb3   p">
      <div className="mw9 center white ph pb2 pb0-ns   justify-between-l">
        <div className="pr0 mb4 w-25-ns   w-50-m dib   ma4 ">
          <label className="f4-ns b fw5 dt   tracked ttu white ">
            Revsite Info Section
          </label>

          <label className="hover-blue dt pv2" onClick={executeScroll}>
            Revsite And About
          </label>

          <label className="hover-blue dt pv2" onClick={executeScroll2}>
            Rejected by rev.com
          </label>

          <label className="hover-blue dt pv2">
            <label onClick={executeScroll3}> Rev Review &</label>{" "}
            <label className="ml1" ref={buttonRef2}>
              Verification
            </label>
          </label>

          <label className="hover-blue dt pv2" onClick={executeScroll4}>
            Rev Application Process
          </label>

          <label className="hover-blue dt pv2">
            <label onClick={executeScroll5}>Rev</label>{" "}
            <label className="ml1" ref={buttonRef}>
              Account
            </label>{" "}
            <label className="ml1"> and Services</label>
          </label>

          <label className="hover-blue dt pv2" onClick={executeScroll6}>
            Common Reasons for Deactivation
          </label>
        </div>
        <div className="pr0 mb4 w-25   dib ma4 ">
          <label className="f4 fw5 b dt tracked ttu white ">Links</label>

          <label
            className="hover-blue dt pv3 pv1-m"
            onClick={() => history.push("/training")}
          >
            Training
          </label>

          <label
            className="hover-blue dt pv3 pv1-m"
            onClick={() => history.push("/register")}
          >
            Register
          </label>

          <label
            className="hover-blue dt pv3 pv1-m"
            onClick={() => history.push("/login")}
          >
            Login
          </label>

          <label
            className="hover-blue dt pv3 pv1-m"
            onClick={() => history.push("/myaccount")}
          >
            My Account
          </label>

          <div className=" dib mt2  dt-m  ">
            <div className="f7 fw5 tracked ttu">Get in touch</div>

            <div className="mt3  w-25 o-100 ">
              <label
                target="blank"
                rel="noreferrer"
                className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center  br2 "
                href="https://facebook.com/revsite"
                title="Facebook"
                onClick={() => window.open("https://facebook.com/", "_blank")}
              >
                <svg
                  className="dib h2 w2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.414"
                >
                  <path
                    d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="f6 ml3 pr2">Facebook</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mb0-ns pa4 dib mb3 order-1-ns order-0 ">
          <label
            className="f4 o-100 fw6 blue"
            onClick={() => history.push("/termsofservice")}
          >
            Terms
          </label>{" "}
          <b className="mh1 b"> &</b>
          <label className="mh2 f4 f3-m o-100 fw6 blue ">Privacy</label>{" "}
          <span className="mr3 order-0-ns order-1 f4">© Revsite.co</span>
        </div>
      </div>
    </div>
  );
}

// export default Footer;
