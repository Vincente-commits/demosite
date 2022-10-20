import React from "react";

import img from "../assets/img/revsiteLogo.png";

import validator from "validator";

import ContactInfo from "./ContactInfo";

class Verification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AccEmail: "",
      AccPassword: "",
      AccRecoveryEmail: "",
      AccLocation: "",

      flag: 1,
      update: false,
      emailError: "",
      emailError2: "",

      next: false,

      verificationInfo: {
        AccEmail: "",
        AccPassword: "",
        AccRecoveryEmail: "",
        AccLocation: "",
      },
    };
  }

  onRecoveryEmailChange = (event) => {
    this.setState({ AccRecoveryEmail: event.target.value });
    var email = this.state.AccRecoveryEmail;

    if (validator.isEmail(email)) {
    } else {
    }
  };

  validateEmail = () => {
    let email = this.state.AccEmail;
    let recoveryEmail = this.state.AccRecoveryEmail;

    if (validator.isEmail(email)) {
      this.setState({ emailError: "valid" });
      this.setState({ flag: 1 });
    } else {
      this.setState({ emailError: "not valid" });
      this.setState({ flag: 2 });
    }
    if (validator.isEmail(recoveryEmail)) {
      this.setState({ emailError2: "valid" });
    } else {
      this.setState({ emailError2: "not valid" });
    }
  };

  onEmailChange = (event) => {
    if (event.target.value === "") {
    } else {
      this.setState({ AccEmail: event.target.value });
    }
  };
  onPasswordChange = (event) => {
    this.setState({ AccPassword: event.target.value });
  };
  onLocationChange = (event) => {
    this.setState({ AccLocation: event.target.value });
  };

  onNext = () => {
    if (
      this.state.AccEmail.length >= 1 &&
      this.state.AccPassword.length >= 1 &&
      this.state.AccLocation.length >= 1
    ) {
      this.validateEmail();
      this.setState({ flag: 1 });
      this.setState({ next: true });

      //verification info
      let verificationDetails = {
        AccEmail: this.state.AccEmail,
        AccPassword: this.state.AccPassword,
        AccRecoveryEmail: this.state.AccRecoveryEmail,
        AccLocation: this.state.AccLocation,
      };

      this.setState({ verificationInfo: verificationDetails });
    } else if (
      this.state.AccEmail.length === 0 ||
      this.state.AccPassword.length === 0 ||
      this.state.AccLocation.length === 0
    ) {
      this.setState({ flag: 2 });
    }
  };

  render() {
    return (
      <div
        className="artce bg-white br3 bb b--black-10 ma0m 
       mw7 shadow-5 center"
      >
        <main className="pa4 black-80">
          <div className="measue center">
            <fieldset id="registe" className=" ba b--transparent ph0 mh0">
              <legend className="f5 fw6 ph0 mh0">
                Provide Account Information
              </legend>
              <blockquote className="athelas ml0 mr0 bb mt0  black-90 bw1 b--black"></blockquote>
              <div className=" black-80 center">
                <label className="f5 fw6   ">
                  My Products <b className="red b">*</b>
                </label>
              </div>
            </fieldset>
            <div className=" bg-light-gray  w-100 br3 pa2  bw2 shadow-5 ">
              <div className="w-90-l">
                <img
                  src={img}
                  width="100rem"
                  className="card-img-to "
                  alt="itemPhoto"
                />

                <p className="card-te fr mt0 b">$200.00</p>

                <label className="card-titl  db b mt1 ">
                  Verification service
                </label>
                <div className="flex">
                  <label className="card-text f6 fw1 gray mt1 ">
                    The process takes from 3 to 7 working days. We guarantee
                    quality service with Cashback money guarantee.
                  </label>
                </div>
              </div>
            </div>
            <blockquote className="athelas ml0 mr0 bb mt3  black-90 bw1 b--black"></blockquote>
            <div className="fr dt">
              <label className="card-text mt0 ">Total</label>
              <label className="card-text mt0 ml5 b">$200.00</label>
            </div>

            <div className="measure mt3 w-100 dt  ">
              <label className="card-text dib-l  mt0 b w3 ">
                Email <b className="red b">*</b>
              </label>

              <input
                className="input reset ba mt1  ml0-m b--black-20 pa2 mb2 w-90 "
                placeholder="Email"
                onChange={this.onEmailChange}
              />
              {this.state.emailError === "not valid" && (
                <p className="card-tite f6 b red">Incorrect email format.</p>
              )}
            </div>
            <div className="measure mt3 w-100 dt  ">
              <label className="card-text   mt0 b w3 ">
                Password <b className="red b">*</b>
              </label>

              <input
                className="input reset ba mt1  ml0-m b--black-20 pa2 mb2 dt w-70 "
                placeholder="Password"
                onChange={this.onPasswordChange}
              />
            </div>

            <div className="measure mt3 w-100 dt  ">
              <label className="card-text   mt0 b w3 ">
                Recovery Email <b className="red b">*</b>
              </label>

              <input
                className="input reset ba mt1  ml0-m b--black-20 pa2 mb2 w-90 "
                placeholder="Optional"
                onChange={this.onRecoveryEmailChange}
              />
            </div>
            {this.state.emailError2 === "not valid" && (
              <p className="card-tite f6 b red">Incorrect email format.</p>
            )}

            <div className="measure mt3 w-100   ">
              <label className="card-text  mt0 b w3 ">
                Location <b className="red b">*</b>
              </label>

              <select
                className="pa2 mt3 w-50 db"
                id="input_19"
                name="q19_location"
                data-component="dropdown"
                required=""
                onChange={this.onLocationChange}
              >
                <option value=""> Please Select </option>
                <option value="Australia"> Australia </option>
                <option value="India"> India </option>
                <option value="Canada"> Canada </option>
                <option value="Ireland"> Ireland </option>
                <option value="Mexico"> Mexico </option>
                <option value="Netherlands">Netherlands </option>
                <option value="New Zealand"> New Zealand </option>
                <option value="South Africa"> South Africa </option>
                <option value="United Kingdom"> United Kingdom </option>
                <option value="United States"> United States </option>
              </select>
            </div>
            {this.state.flag === 2 && (
              <p className="card-tite f6 red b">
                Ensure to check your details before proceeding.
              </p>
            )}
            <blockquote className="athelas ml0 mr0 bb mt3  gray-80 bw1 b--gray ph0"></blockquote>
            <div className="pa3">
              <label
                className="f6 h-20 no-underline fr br-pill ph3 pv2 mb2 dib white bg-blue w4 tc pa3 "
                onClick={this.onNext}
              >
                Next
              </label>
            </div>
            {this.state.next === true && (
              <ContactInfo verificationInfo={this.state.verificationInfo} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default Verification;
