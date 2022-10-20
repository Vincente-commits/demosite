import React from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import img from "../assets/img/successImage.jpg";

class PayPalPay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payerEmail: props.propsEmail,
      payerPhone: props.propsPhone,
      payerAdditional: props.propsAdditional,

      flag: 1,
      successVar: "failed",
      accType: "",
      accID: 0,
      verificationInfo: {
        email: "",
        password: "",
        location: "",
        accRecoveryEmail: "",
      },
      foundErr: null,
    };
  }

  createOrder = (data, actions) => {
    this.setState({ accType: this.props.accountType });

    if (this.state.accType === "Captioning") {
      this.setState({ accID: 1 });
    } else if (this.state.accType === "Transcription") {
      this.setState({ accID: 2 });
    } else if (this.state.accType === "Translation") {
      this.setState({ accID: 3 });
    } else if (this.state.accType === "Verification") {
      this.setState({ accID: 4 });
    } else {
      this.setState({ accID: 1 });
    }

    return fetch("https://peaceful-lake-35455.herokuapp.com/checkout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            id: this.state.accID,
            quantity: 1,
          },
        ],
      }),
    })
      .then(function (res) {
        if (!res.ok) {
          throw Error("could not complete request because of an error");
        }
        return res.json();
      })
      .then(function (orderData) {
        return orderData.id;
      })
      .catch((err) => {
        this.setState({ foundErr: err.message });
        this.setState({ successVar: "failed" });
      });
  };

  updateSuccess(res) {
    if (res.statusText === "OK") {
      this.setState({ successVar: 2 });
    }
  }

  onApprove = async (data, actions) => {
    return fetch("https://peaceful-lake-35455.herokuapp.com/getorder", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.accID,
        orderID: data.orderID,
        email: this.state.payerEmail,
        phone: this.state.payerPhone,
        additional: this.state.payerAdditional,
      }),
    })
      .then(function (res) {
        if (!res.ok) {
          throw Error("could not complete request because of an error");
        }

        return res.json();
      })
      .then((res) => {
        let sucessVal = "";
        sucessVal = res;
        this.setState({ successVar: sucessVal });
        this.setState({ foundErr: null });
      })
      .catch((err) => {
        this.setState({ foundErr: err.message });
        this.setState({ successVar: "failed" });
      });
  };
  render() {
    return (
      <div className="br2 pv3 center w-80 w-100-m">
        <PayPalScriptProvider
          options={{
            "client-id":
              "AaMFUmQxxEFbRXmwjOYMB9apCAXZZ3z8ofiMeQH6XKNNGEdI8yhOGmrIA54j4xcE_8ddPtHRUOHnU67D",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => this.createOrder(data, actions)}
            onApprove={(data, actions) => this.onApprove(data, actions)}
          />
        </PayPalScriptProvider>

        {this.state.foundErr && (
          <div className="bg-white shadow-5 br3 black center dib">
            <label className="dt center pa3">{this.state.foundErr}</label>
          </div>
        )}

        {this.state.successVar === "success" && (
          <div className="bg-white shadow-5 br3 black center dib">
            <img
              src={img}
              width="100rem"
              className="pa3 center"
              alt="itemPhoto"
            />

            <label className="dt center pa3">
              Your payment was successful, you should recieve an email to
              confirm the order and our representative will get back to you in
              no time.
            </label>
          </div>
        )}
      </div>
    );
  }
}
export default PayPalPay;
