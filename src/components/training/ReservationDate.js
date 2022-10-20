import React from "react";
import PayPalTraining from "./PayPalTraining";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../../App.css";

class ReservationDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPass: "",
      flag: 1,
      checkout: 1,

      selectedDate: new Date().toLocaleDateString(),
      reservTime: "",
      timeframe: 1,
    };
  }

  cancelTimeframe = () => {
    this.setState({ reservTime: "" });
  };

  onDateChange = (date) => {
    date = date.toLocaleDateString();
    this.setState({ selectedDate: date });
  };

  onTimeClick = (event) => {
    switch (event.target.id) {
      case "L1":
        return this.setState({ reservTime: "08:00 AM" });

      case "L2":
        return this.setState({ reservTime: "10:00 AM" });

      case "L3":
        return this.setState({ reservTime: "12:00 PM" });

      case "L4":
        return this.setState({ reservTime: "02:00 PM" });

      case "L5":
        return this.setState({ reservTime: "04:00 PM" });

      case "L6":
        return this.setState({ reservTime: "06:00 PM" });

      default:
        return "";
    }
  };

  onNext = () => {
    if (this.state.reservTime.length >= 1) {
      this.setState({ checkout: 2 });
      this.setState({ timeframe: 1 });
    } else {
      this.setState({ checkout: 1 });
      this.setState({ timeframe: 2 });
    }
  };

  render() {
    return (
      <div className="artice bg-white br3 pa2 bb b--black-10 mv1 w-100 w-100-m w-100-l shadow-5  mw7 center">
        <label className=" fw6 lh-copy f3" htmlFor="email-address">
          Reservation Date & Time <b className="red">*</b>
        </label>
        <Calendar
          className="blue db b-red "
          id="calendar"
          onChange={this.onDateChange}
        />

        <div className=" measure dib    ">
          <div className="">
            <div className="mt3 pv2">
              <label
                id="L1"
                className="f5 link dim ba b bw1 ph3 pv2 mb2 blue"
                onClick={this.onTimeClick}
              >
                08:00 AM
              </label>
              <label
                id="L2"
                className="f5 ml3 link dim ba b bw1 ph3 pv2 mb2 blue"
                onClick={this.onTimeClick}
              >
                10:00 AM
              </label>
            </div>
          </div>
          <div className=" mt4 pv2 ">
            <label
              id="L3"
              className="f5 link dim ba b bw1 ph3 pv2 mb2 blue"
              onClick={this.onTimeClick}
            >
              12:00 PM
            </label>
            <label
              id="L4"
              className="f5 ml3 link dim ba b bw1 ph3 pv2 mb2 blue"
              onClick={this.onTimeClick}
            >
              02:00 PM
            </label>
          </div>

          <div className=" mt4 pv2 ">
            <label
              id="L5"
              className="f5 link dim ba b bw1 ph3 pv2 mb2 blue"
              onClick={this.onTimeClick}
            >
              04:00 PM
            </label>
            <label
              id="L6"
              className="f5 ml3 link dim ba b bw1 ph3 pv2 mb2 blue"
              onClick={this.onTimeClick}
            >
              06:00 PM
            </label>
          </div>
        </div>
        <div className="bg-blue white db w-80 mt3">
          <label aria-live="polite">
            Your training is booked for {this.state.selectedDate} on {"    "}
            <b className="red"> {this.state.reservTime}</b> .
          </label>
          <button type="button" className="dib " onClick={this.cancelTimeframe}>
            X
          </button>
        </div>

        {this.state.timeframe === 2 && (
          <p aria-live="polite" className="red b f5">
            Please choose a time frame for your training.
          </p>
        )}
        <blockquote className="athelas ml0 mr0 bb mt4  gray-90 bw1 b--gray"></blockquote>

        <div className="mb3 fr   grow">
          <label
            className="f6 h-20 no-underline br-pill ph3  pv2 mb2 white bg-blue w4 tc pa3  "
            onClick={this.onNext}
          >
            Next
          </label>
        </div>
        <div className="mt5">
          {this.state.checkout === 2 && (
            <div className="card db bg-near-white br3 pa1  bw2 shadow-5 w8">
              <div className="card-body ">
                <legend className="f4  ph0 mh0 ma1 b ">Pay with PayPal</legend>
                <label className="card-tite f6">
                  Your training details will be submitted to our educator once
                  your payment is complete. Our educator will email you with
                  various meeting links as per what you chose.
                  <p>
                    <b className="f4">Note: </b>Make sure your PayPal checkout
                    cart Page indicates the right amount of the training you
                    paid for. Email service@revsite.co for support.
                  </p>
                </label>
                <div className="ph3 w-100 pv3">
                  <PayPalTraining
                    trainingState={this.props.trainingState}
                    reservationState={this.props.reservationState}
                    selectedDate={this.state.selectedDate}
                    reservTime={this.state.reservTime}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ReservationDate;
