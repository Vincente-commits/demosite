import React from "react";
import moment from "moment";
import "./style.css";

import { useHistory } from "react-router-dom";

export default class MainAppCounter extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      //date calc
      //start
      var m1 = moment();

      //end
      var m2 = moment("14-11-2021 23:59", "DD-MM-YYYY HH:mm");
      var m3 = m2.diff(m1, "minutes");

      var m5 = m2.diff(m1, "s");
      var m6 = m2.diff(m1, "d");

      var numhours = Math.floor((m3 % 1440) / 60);
      var numminutes = Math.floor((m3 % 1440) % 60);
      var numsecs = Math.floor((m5 % 86400) % 60);

      const days = m6;
      const hours = numhours;
      const minutes = numminutes;

      const seconds = numsecs;

      this.setState({ days, hours, minutes, seconds });
      if (seconds < 0) {
        return;
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  getbuyservice = this.props;
  render() {
    const { days, hours, minutes, seconds } = this.state;

    // Mapping the date values to radius values

    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (seconds < 0) {
      if (this.interval) {
        clearInterval(this.interval);
      }
      return null;
    }

    return (
      <div className=" bg-light-red db br3 bb b--black-10 pa2  w-100 shadow-5 center ">
        <h1 className="white db">---SALE FEVER COUNTDOWN---</h1>
        <p className="f5 white tc">
          Get upto <strong>40% OFF</strong>, this weekend
        </p>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              {days}
              <span>days</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>seconds</span>
            </div>
          )}
        </div>
        <p
          id="Captioning"
          className=" grow no-underline w4 center br-pill ph3 pv2 mt0 db white bg-dark-blue f4 b "
          //   onClick={(window.location.pathname = "/buy")}
        >
          Get Offer
        </p>
      </div>
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}
