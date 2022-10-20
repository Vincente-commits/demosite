import React from "react";

import PayPalPay from "./PayPalVerification";

import validator from "validator";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirmEmail: "",
      phone: "",
      additional: "",

      flag: 1,
      pay: 1,

      btnText: "Next",
      accountType: "Verification",
      emailError: "",
    };
  }

  setPhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  validateEmail = () => {
    var email = this.state.confirmEmail;

    if (validator.isEmail(email)) {
      this.setState({ emailError: "valid" });
      this.setState({ flag: 1 });
    } else {
      this.setState({ emailError: "not valid" });
      this.setState({ flag: 2 });
    }
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onConfirmEmailChange = (event) => {
    this.setState({ confirmEmail: event.target.value });
  };

  onAdditionalChange = (event) => {
    this.setState({ additional: event.target.value });
  };

  onPay = () => {
    this.validateEmail();
    if (
      this.state.email.length >= 1 &&
      this.state.confirmEmail.length >= 1 &&
      this.state.phone.length >= 1 &&
      this.state.email === this.state.confirmEmail
    ) {
      this.setState({ pay: 2 });
      this.setState({ flag: 1 });
      this.setState({ btnText: "Cancel" });

      //
    } else if (
      this.state.email.length === 0 ||
      this.state.confirmEmail.length === 0 ||
      this.state.phone.length === 0
    ) {
      this.setState({ pay: 1 });
      this.setState({ flag: 2 });
      this.setState({ btnText: "Next" });
    } else {
      this.setState({ pay: 1 });
      this.setState({ flag: 2 });
      this.setState({ btnText: "Next" });
    }

    if (this.state.btnText === "Cancel") {
      this.setState({ pay: 1 });
      this.setState({ btnText: "Next" });
    }
  };

  render() {
    return (
      <main className="pa1  black-80">
        <fieldset id="registe" className="measure ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Your Contact Information</legend>
          <div className="  center">
            <label className=" ">
              Drop your Personal <b>PayPal</b> email where we will contact you
              immediately after your payment is Verified.
            </label>
            <blockquote className="athelas ml0 mr0 bb mt4  black-90 bw1 b--gray"></blockquote>
          </div>

          <div className="measure mt3 w-100 dt  ">
            <label className="card-text   mt0 b w3 ">
              Email <b className="red b">*</b>
            </label>

            <input
              className="input reset ba mt1  ml0-m b--black-20 pa2 mb2 w-90 "
              placeholder="Email"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="measure mt3 w-100 dt  ">
            <label className="card-text mt0 b w3 ">
              Confirm Email <b className="red b">*</b>
            </label>

            <input
              className="input reset ba mt1  ml0-m b--black-20 pa2 mb2 w-90 "
              placeholder="Email"
              onChange={this.onConfirmEmailChange}
            />
            {this.state.emailError === "not valid" && (
              <p className="card-tite f6 b red">
                Email don't match or incorrect email format.
              </p>
            )}
          </div>
          <div className="measure db mt3 w-100 w-100-m  ">
            <label className="card-text dib  mt0 b w3 ">
              Phone <b className="red b">*</b>
            </label>

            <input
              className="input reset db mt2 ba  b--black-20 pa2 mb2 w-90"
              placeholder="Phone"
              onChange={this.setPhone}
            />
          </div>
          <blockquote className="athelas ml0 mr0 bb mt4  black-90 bw1 b--gray"></blockquote>
          <legend className="f4 fw6 ph0 mh0">Any additional request?</legend>
          <textarea
            id="comment"
            name="comment"
            className="db border-box hover-black w-100 w-80-m h4 measure ba b--black-20 pa2 br2 mb2 mt2"
            aria-describedby="comment-desc"
            onChange={this.onAdditionalChange}
          ></textarea>
          {this.state.flag === 2 && (
            <p className="card-tite f6 red">
              Ensure to check your details before check out.
            </p>
          )}
          <blockquote className="athelas ml0 mr0 bb mt4  black-90 bw1 b--gray"></blockquote>
          <legend className="f4  ph0 mh0 mt4">Pay with PayPal</legend>
          <div className="card bg-near-white br3 pa1 mt2 bw2 shadow-5 w8">
            <div>
              <div className="card-body dt">
                <label className="card-tite f6">
                  <b> Note: </b> You will be redirected to a PayPal page, click,
                  the paypal orange button, and a PayPal secure browser should
                  appear. Also confirm that the PayPal payment cart contains the
                  right amount as seen in our site for the product you are
                  paying for.
                  <p>
                    <b> Confirmation: </b> PayPal will email you the payment
                    details and so will we, followed by another email that
                    delivers the product you paid for. Thank you.
                  </p>
                </label>
                <div className=" pv3 ">
                  <button
                    className="f3 dim br3 ph3 pv2 mb2 dib white bg-blue"
                    onClick={this.onPay}
                  >
                    <b className="f3 white dim-gray">{this.state.btnText}</b>
                  </button>

                  {this.state.pay === 2 && (
                    <PayPalPay
                      propsEmail={this.state.confirmEmail}
                      propsPhone={this.state.phone}
                      propsAdditional={this.state.additional}
                      accountType={this.state.accountType}
                      verificationInfo={this.props.verificationInfo}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </main>
    );
  }
}

export default ContactInfo;
