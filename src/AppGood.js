import React, { Component } from "react";
import ReactDOM from "react-dom";

import "tachyons";
import { withRouter } from "react-router";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ForgotPass from "./components/login/ForgotPass";

import Terms from "./components/terms/Terms";
import Home from "./components/home/Home";
import Shopcart from "./components/shopcart/Shopcart";
import BuyerInfo from "./components/shopcart/BuyerInfo";

import Footer from "./components/topHeader/Footer";
import DashboardHeader from "./components/topHeader/DashboardHeader";
import LoginHeader from "./components/topHeader/LoginHeader";
import MyAccount from "./components/myAccount/MyAccount";

import ContactInfo from "./components/verification/ContactInfo";
import Verification from "./components/verification/Verification";
import Training from "./components/training/Training";
import ReservationInfo from "./components/training/ReservationInfo";
import ReservationDate from "./components/training/ReservationDate";

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";

import ReactLogo from "./appbg.svg";

class AppGood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "",
      isSignedIn: false,

      user: {
        id: "",
        email: "",
      },

      accountType: "",
      verificationInfo: {
        email: "",
        password: "",
        location: "",
        accRecoveryEmail: "",
      },
      trainingState: {
        setCategory: "",
        setTrainingMode: "",
      },
      reservationState: {
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
      },
    };

    this.textInput = null;
    this.textInput2 = null;
    this.textInput3 = null;
    this.textInput4 = null;
    this.textInput5 = null;
    this.textInput6 = null;
    let app = window.location.pathname;
    this.setRevandAbout = (element) => {
      this.textInput = element;
    };

    this.setRejectbyRev = (element) => {
      this.textInput2 = element;
    };
    this.setRevReview = (element) => {
      this.textInput3 = element;
    };
    this.setRevApplication = (element) => {
      this.textInput4 = element;
    };
    this.setAboutRev = (element) => {
      this.textInput5 = element;
    };
    this.setComonReason = (element) => {
      this.textInput6 = element;
    };

    // this.focusTextInput = () => {
    //   // Focus the text input using the raw DOM API
    //   if (this.textInput) this.textInput.focus();
    // };

    this.executeScroll = () => {
      if (
        this.state.route === "/" ||
        this.state.route === "/home" ||
        app === "/" ||
        app === "/home"
      ) {
        this.textInput.scrollIntoView({ behavior: "smooth" });
      }
    };
    this.executeScroll2 = () => {
      if (
        this.state.route === "/" ||
        this.state.route === "/home" ||
        app === "/" ||
        app === "/home"
      ) {
        this.textInput2.scrollIntoView({ behavior: "smooth" });
      }
    };
    this.executeScroll3 = () => {
      if (
        this.state.route === "/" ||
        this.state.route === "/home" ||
        app === "/" ||
        app === "/home"
      ) {
        this.textInput3.scrollIntoView({ behavior: "smooth" });
      }
    };
    this.executeScroll4 = () => {
      if (
        this.state.route === "/" ||
        this.state.route === "/home" ||
        app === "/" ||
        app === "/home"
      ) {
        this.textInput4.scrollIntoView({ behavior: "smooth" });
      }
    };
    this.executeScroll5 = () => {
      if (
        this.state.route === "/" ||
        this.state.route === "/home" ||
        app === "/" ||
        app === "/home"
      ) {
        this.textInput5.scrollIntoView({ behavior: "smooth" });
      }
    };
    this.executeScroll6 = () => {
      if (
        this.state.route === "/" ||
        this.state.route === "/home" ||
        app === "/" ||
        app === "/home"
      ) {
        this.textInput6.scrollIntoView({ behavior: "smooth" });
      }
    };
  }

  onTrainingInfoChange = (category, trainingMode) => {
    this.setState({
      trainingState: {
        setCategory: category,
        setTrainingMode: trainingMode,
      },
    });
  };

  onReservationInfoChange = (email, fname, lname, phone) => {
    this.setState({
      reservationState: {
        email: email,
        firstName: fname,
        lastName: lname,
        phone: phone,
      },
    });

    console.log("user reservation details ", this.state.reservationState);
  };

  onVerificationInfoChange = (email, password, location, recoveryEmail) => {
    this.setState({
      verificationInfo: {
        email: email,
        password: password,
        location: location,
        accRecoveryEmail: recoveryEmail,
      },
    });

    console.log("Acc to be verified ", this.state.verificationInfo);
  };

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        email: user.email,
      },
    });
    if (user.id) {
      this.setState({ isSignedIn: true });
    }
  };

  accountChange = (account) => {
    this.setState({ accountType: account });
  };

  onRouteChange = (route) => {
    if (this.state.isSignedIn === true) {
      this.setState({ route: route });
      console.log("route signed in ", route);
    } else if (this.state.isSignedIn === false) {
      if (
        route === "/login" ||
        route === "/register" ||
        route === "/" ||
        route === "/termsofservice"
      ) {
        this.setState({ route: route });
        console.log("route not signed in ", route);
      }
    }
    console.log({ route });
  };

  chooseRender = () => {
    if (this.state.user.id.length === 0) {
      this.setState({ isSignedIn: false });
    } else if (this.state.user.id.length >= 1) {
      this.setState({ isSignedIn: true });
      // this.setState({ route: route });
    } else {
      this.setState({ isSignedIn: false });
    }
  };

  render() {
    const { isSignedIn, route } = this.state;
    console.log(isSignedIn);
    console.log(this.state.isSignedIn);

    switch (isSignedIn) {
      case true:
        return (
          <div className="Ap    ">
            {console.log(this.state.user.email)}
            <div className=" ">
              <DashboardHeader onRouteChange={this.onRouteChange} />
            </div>
            {(() => {
              let app = window.location.pathname;

              switch (app) {
                case "/buy":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <Shopcart
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                        accountChange={this.accountChange}
                        accountType={this.state.accountType}
                      />
                    </section>
                  );
                case "/training":
                  console.log("buy route");

                  return (
                    <section className="coolbg pa1-m pa1">
                      <Training
                        onRouteChange={this.onRouteChange}
                        onTrainingInfoChange={this.onTrainingInfoChange}
                        route={this.state.route}
                      />
                    </section>
                  );
                case "/myaccount":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <MyAccount
                        propsId={this.state.user.id}
                        propsEmail={this.state.user.email}
                        propsPassword={this.state.user.password}
                        isSignedIn={isSignedIn}
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                      />
                    </section>
                  );
                case "/verification":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <Verification
                        onRouteChange={this.onRouteChange}
                        onVerificationInfoChange={this.onVerificationInfoChange}
                      />
                    </section>
                  );
                case "/forgotPass":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <ForgotPass onRouteChange={this.onRouteChange} />
                    </section>
                  );

                default:
                  return (
                    <section className="pt5 center">
                      <Home
                        setRevandAbout={this.setRevandAbout}
                        setRejectbyRev={this.setRejectbyRev}
                        setRevReview={this.setRevReview}
                        setRevApplication={this.setRevApplication}
                        setAboutRev={this.setAboutRev}
                        setComonReason={this.setComonReason}
                      />
                    </section>
                  );
              }
            })()}
            {/* routes with two parts */}
            {(() => {
              switch (route) {
                case "/training/reservationInfo":
                  return (
                    <section className="coolbg pa0-m pa0">
                      <ReservationInfo
                        onRouteChange={this.onRouteChange}
                        onReservationInfoChange={this.onReservationInfoChange}
                      />
                    </section>
                  );

                case "/buy/buyerInfo":
                  return (
                    <section className="coolbg pa0 pa0-m ">
                      <BuyerInfo
                        onRouteChange={this.onRouteChange}
                        accountType={this.state.accountType}
                      />
                    </section>
                  );
                case "/verification/contactInfo":
                  return (
                    <section className="coolbg pa0 pa0-m">
                      <ContactInfo
                        onRouteChange={this.onRouteChange}
                        verificationInfo={this.state.verificationInfo}
                      />
                    </section>
                  );

                default:
                  return (
                    <section className="pt5 center">
                      <Home
                        setRevandAbout={this.setRevandAbout}
                        setRejectbyRev={this.setRejectbyRev}
                        setRevReview={this.setRevReview}
                        setRevApplication={this.setRevApplication}
                        setAboutRev={this.setAboutRev}
                        setComonReason={this.setComonReason}
                      />
                    </section>
                  );
              }
            })()}
            {/* routes with 3 parts */}

            {(() => {
              switch (route) {
                case "/training/reservationInfo/reservationDate":
                  return (
                    <section className="coolbg pa1-m pa1 ma0">
                      <ReservationDate
                        onRouteChange={this.onRouteChange}
                        trainingState={this.state.trainingState}
                        reservationState={this.state.reservationState}
                      />
                    </section>
                  );

                case "/buy/buyerInfo/":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <BuyerInfo
                        onRouteChange={this.onRouteChange}
                        accountType={this.state.accountType}
                      />
                    </section>
                  );
                default:
                  return null;
              }
            })()}

            <Footer
              props={this.props}
              executeScroll={this.executeScroll}
              executeScroll2={this.executeScroll2}
              executeScroll3={this.executeScroll3}
              executeScroll4={this.executeScroll4}
              executeScroll5={this.executeScroll5}
              executeScroll6={this.executeScroll6}
            />
          </div>
        );
      default:
        return (
          <div className="Ap    ">
            {console.log(this.state.user.email)}
            <div className=" ">
              <LoginHeader onRouteChange={this.onRouteChange} />
            </div>

            {(() => {
              let app = window.location.pathname;

              switch (app) {
                case "/login":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <Login
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                      />
                    </section>
                  );
                case "/register":
                  return (
                    <section className="coolbg pa1-m pa1">
                      <Register
                        loadUser={this.loadUser}
                        onRouteChange={this.onRouteChange}
                      />
                    </section>
                  );
                case "/forgotPass":
                  return (
                    <section className="coolbg pa1 pa1-m">
                      <ForgotPass onRouteChange={this.onRouteChange} />
                    </section>
                  );
                case "/termsofservice":
                  return (
                    <section className="coolbg pa1-m pa1">
                      <Terms />
                    </section>
                  );

                default:
                  return (
                    <section className="pt5 center">
                      <Home
                        setRevandAbout={this.setRevandAbout}
                        setRejectbyRev={this.setRejectbyRev}
                        setRevReview={this.setRevReview}
                        setRevApplication={this.setRevApplication}
                        setAboutRev={this.setAboutRev}
                        setComonReason={this.setComonReason}
                      />
                    </section>
                  );
              }
            })()}

            <Footer
              props={this.props}
              executeScroll={this.executeScroll}
              executeScroll2={this.executeScroll2}
              executeScroll3={this.executeScroll3}
              executeScroll4={this.executeScroll4}
              executeScroll5={this.executeScroll5}
              executeScroll6={this.executeScroll6}
            />
          </div>
        );
    }
  }
}

export default AppGood;
