import React from "react";

import validator from "validator";

class ReservationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",

      flag: null,
      emailError: "",
    };
  }

  validateEmail = () => {
    var email = this.state.email;

    if (validator.isEmail(email)) {
      this.setState({ emailError: "valid" });
      this.setState({ flag: 1 });
    } else {
      this.setState({ emailError: "not valid" });
      this.setState({ flag: 2 });
    }
  };
  onFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };
  onLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });

    this.setState({ flag: 1 });
  };

  checkEmpty = () => {
    this.validateEmail();
    const value = this.state;

    if (
      value.firstName.length >= 1 &&
      value.lastName.length >= 1 &&
      value.email.length >= 1 &&
      value.phone.length >= 1
    ) {
      if (value.flag === 1) {
        let InfoState = {
          email: this.state.email,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
        };

        this.props.onTrainingInfoChange(InfoState);
      } else {
      }
    } else {
    }
  };

  render() {
    return (
      <main className="pa4 bg-white ma2 black-90 ">
        <div className="measure ">
          <fieldset id="reservation" className="ba b--transparent ph0 mh0">
            <legend className=" fw6 b lh-copy f2">
              Provide your details to book your reservation
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                First Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
                type="firstname"
                name="firstname"
                placeholder="First Name"
                id="Fname"
                onChange={this.onFirstNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Last Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
                type="lastname"
                name="lastname"
                placeholder="Last Name"
                id="Lname"
                onChange={this.onLastNameChange}
              />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                E-mail
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="Email"
                name="E-mail"
                id="email"
                onChange={this.onEmailChange}
              />
            </div>
            {this.state.emailError === "not valid" && (
              <p className="card-tite f6 b red">Incorrect email format.</p>
            )}
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Phone
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80"
                type="Phone"
                name="Phone"
                placeholder="+1"
                id="phone"
                onChange={this.onPhoneChange}
              />
            </div>
          </fieldset>

          {this.state.flag === 2 && (
            <p className="red mt2">
              {" "}
              Please fill all required fields to continue
            </p>
          )}

          <div className=" fr grow">
            <label
              className="f6  no-underline br-pill pv2  white bg-blue  pa4  "
              onClick={this.checkEmpty}
            >
              Next
            </label>
          </div>
        </div>
      </main>
    );
  }
}

export default ReservationInfo;
