import React from "react";

import Cookies from "js-cookie";

import "tachyons";

//fro spinners css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ForgotPass from "./components/login/ForgotPass";

import Terms from "./components/terms/Terms";
import Home from "./components/home/Home";
import Shopcart from "./components/shopcart/Shopcart";
import ShopcartParams from "./components/shopcart/ShopcartParams";
import BuyerInfo from "./components/shopcart/BuyerInfo";

import Footer from "./components/topHeader/Footer";
import DashboardHeader from "./components/topHeader/DashboardHeader";
import LoginHeader from "./components/topHeader/LoginHeader";
import MyAccount from "./components/myAccount/MyAccount";

import Verification from "./components/verification/Verification";
import Training from "./components/training/Training";
import ReservationInfo from "./components/training/ReservationInfo";
import ReservationDate from "./components/training/ReservationDate";

// import MainAppCounter from "./components/counter/MainAppCounter";

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

// import { useSelector, useDispatch } from "react-redux";

function App() {
  let isSignedIn = false;

  let signinCookie = Cookies.get("id");
  if (signinCookie >= 1) {
    isSignedIn = true;
  }

  //scrollto element
  let textInput = null;
  let textInput2 = null;
  let textInput3 = null;
  let textInput4 = null;
  let textInput5 = null;
  let textInput6 = null;

  const setRevandAbout = (element) => {
    textInput = element;
  };

  const setRejectbyRev = (element) => {
    textInput2 = element;
  };
  const setRevReview = (element) => {
    textInput3 = element;
  };
  const setRevApplication = (element) => {
    textInput4 = element;
  };
  const setAboutRev = (element) => {
    textInput5 = element;
  };
  const setComonReason = (element) => {
    if (element) {
      textInput6 = element;
    }
  };

  // const focusTextInput = () => {
  //   // Focus the text input using the raw DOM API
  //   if (const textInput) const textInput.focus();
  // };

  const executeScroll = () => {
    if (textInput === null) {
    } else {
      textInput.scrollIntoView({ behavior: "smooth" });
    }
  };
  const executeScroll2 = () => {
    if (textInput2 === null) {
    } else {
      textInput2.scrollIntoView({ behavior: "smooth" });
    }
  };
  const executeScroll3 = () => {
    if (textInput3 === null) {
    } else {
      textInput3.scrollIntoView({ behavior: "smooth" });
    }
  };
  const executeScroll4 = () => {
    if (textInput4 === null) {
    } else {
      textInput4.scrollIntoView({ behavior: "smooth" });
    }
  };
  const executeScroll5 = () => {
    if (textInput5 === null) {
    } else {
      textInput5.scrollIntoView({ behavior: "smooth" });
    }
  };
  const executeScroll6 = () => {
    if (textInput6 === null) {
    } else {
      textInput6.scrollIntoView({ behavior: "smooth" });
    }
  };

  switch (isSignedIn) {
    case true:
      return (
        <Router>
          <div className="Ap    ">
            <div className=" ">
              <DashboardHeader />
            </div>
            {/* <MainAppCounter
              timeTillDate="11 14 2021 23:59 pm"
              timeFormat="MM DD YYYY, h:mm a"
              getbuyservice={getbuyservice}
            /> */}

            <Switch>
              <Route
                exact
                path="/myaccount"
                render={(props) => (
                  <section className="coolbg pa1 pa1-m">
                    <MyAccount />
                  </section>
                )}
              ></Route>

              <Route
                exact
                path="/forgotPass"
                render={(props) => (
                  <section className="coolbg pa1 pa1-m">
                    <ForgotPass {...props} />
                  </section>
                )}
              ></Route>
              <Route
                exact
                path="/training/reservationInfo/reservationDate"
                render={(props) => (
                  <section className="coolbg pa1-m pa1 ma0">
                    <ReservationDate />
                  </section>
                )}
              />
              <Route
                exact
                path="/training/reservationInfo"
                render={(props) => (
                  <section className="coolbg pa0-m pa0">
                    <ReservationInfo />
                  </section>
                )}
              />

              <Route
                exact
                path="/training"
                render={(props) => (
                  <section className="coolbg pa1-m pa1">
                    <Training />
                  </section>
                )}
              ></Route>
              <Route
                exact
                path="/buy/buyerInfo"
                render={(props) => (
                  <section className="coolbg pa0 pa0-m ">
                    <BuyerInfo />
                  </section>
                )}
              />
              <Route
                exact
                path="/buy"
                render={(props) => (
                  <section className="coolbg  pa1 pa1-m">
                    <Shopcart />
                  </section>
                )}
              ></Route>
              <Route
                exact
                path="/verification"
                render={(props) => (
                  <section className="coolbg pa1 pa1-m">
                    <Verification />
                  </section>
                )}
              ></Route>
              <Route
                exact
                path="/"
                render={(props) => (
                  <section className="pt5 center">
                    <Home
                      setRevandAbout={setRevandAbout}
                      setRejectbyRev={setRejectbyRev}
                      setRevReview={setRevReview}
                      setRevApplication={setRevApplication}
                      setAboutRev={setAboutRev}
                      setComonReason={setComonReason}
                    />
                  </section>
                )}
              ></Route>
              <Route
                path="*"
                render={(props) => (
                  <section className="pt5 center">
                    <Home
                      setRevandAbout={setRevandAbout}
                      setRejectbyRev={setRejectbyRev}
                      setRevReview={setRevReview}
                      setRevApplication={setRevApplication}
                      setAboutRev={setAboutRev}
                      setComonReason={setComonReason}
                    />
                  </section>
                )}
              ></Route>
            </Switch>

            <Footer
              executeScroll={executeScroll}
              executeScroll2={executeScroll2}
              executeScroll3={executeScroll3}
              executeScroll4={executeScroll4}
              executeScroll5={executeScroll5}
              executeScroll6={executeScroll6}
            />
          </div>
        </Router>
      );

    default:
      return (
        <Router>
          <div className="Ap    ">
            <div className=" ">
              <LoginHeader />
            </div>
            {/* <MainAppCounter
              timeTillDate="11 13 2021 23:59 pm"
              timeFormat="MM DD YYYY, h:mm a"
              getbuyservice={getbuyservice}
            /> */}
            {/* <ShopcartParams /> */}

            <Switch>
              <Route path="/sharedbuy">
                <ShopcartParams />
              </Route>

              <Route
                path="/login"
                render={(props) => (
                  <section className="coolbg pa1 pa1-m">
                    <Login {...props} />
                  </section>
                )}
              ></Route>
              <Route
                path="/register"
                render={(props) => (
                  <section className="coolbg pa1-m pa1">
                    <Register {...props} />
                  </section>
                )}
              ></Route>
              <Route
                exact
                path="/forgotpass"
                render={(props) => (
                  <section className="coolbg pa1 pa1-m">
                    <ForgotPass {...props} />
                  </section>
                )}
              ></Route>
              <Route
                exact
                path="/termsofservice"
                render={(props) => (
                  <section className="coolbg pa1 pa1-m">
                    <Terms {...props} />
                  </section>
                )}
              ></Route>
              <Route
                path="*"
                render={(props) => (
                  <section className="pt5 center">
                    <Home
                      {...props}
                      setRevandAbout={setRevandAbout}
                      setRejectbyRev={setRejectbyRev}
                      setRevReview={setRevReview}
                      setRevApplication={setRevApplication}
                      setAboutRev={setAboutRev}
                      setComonReason={setComonReason}
                    />
                  </section>
                )}
              ></Route>
            </Switch>

            <Footer
              executeScroll={executeScroll}
              executeScroll2={executeScroll2}
              executeScroll3={executeScroll3}
              executeScroll4={executeScroll4}
              executeScroll5={executeScroll5}
              executeScroll6={executeScroll6}
            />
          </div>
        </Router>
      );
  }
}
export default App;
