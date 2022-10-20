import React from "react";
import img from "../assets/img/revsiteLogo.png";
import ReservationInfo from "./ReservationInfo";
import ReservationDate from "./ReservationDate";

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,

      setCategory: "",
      setTrainingMode: "",
      categoryCount: 0,
      meetingCount: 0,

      trainingState: {
        setCategory: "",
        setTrainingMode: "",
      },
      reservationInfo: { email: "", firstName: "", lastName: "", phone: "" },

      next: false,
      next2: false,
    };
  }

  //store training details
  onTrainingInfoChange = (info) => {
    this.setState({ reservationInfo: info });

    this.setState({ next2: true });
  };

  checkCategory = (event) => {
    if (this.state.categoryCount === 0 && event.target.checked === false) {
      this.setState({ categoryCount: 0 });
      return this.state.categoryCount;
    } else if (event.target.checked === true && this.state.categoryCount <= 2) {
      this.setState({ categoryCount: this.state.categoryCount + 1 });

      // return this.state.categoryCount;
    } else if (
      event.target.checked === false &&
      this.state.categoryCount <= 2
    ) {
      this.setState({ categoryCount: this.state.categoryCount - 1 });
    }
    return this.state.categoryCount;
  };

  checkTrainingMode = (event) => {
    if (this.state.meetingCount === 0 && event.target.checked === false) {
      this.setState({ meetingCount: 0 });
      return this.state.meetingCount;
    } else if (event.target.checked === true && this.state.meetingCount <= 2) {
      this.setState({ meetingCount: this.state.meetingCount + 1 });

      // return this.state.meetingCount;
    } else if (event.target.checked === false && this.state.meetingCount <= 2) {
      this.setState({ meetingCount: this.state.meetingCount - 1 });
    }
    return this.state.meetingCount;
  };

  selectionChange = (event) => {
    // this.setState({ setPurchaseMode: event.target.id });

    switch (event.target.id) {
      case "Captioning":
        this.checkCategory(event);

        return this.setState({ setCategory: event.target.id });

      case "Transcription":
        this.checkCategory(event);
        return this.setState({ setCategory: event.target.id });
      case "Zoom":
        this.checkTrainingMode(event);
        return this.setState({ setTrainingMode: event.target.id });
      case "Google":
        this.checkTrainingMode(event);
        return this.setState({ setTrainingMode: event.target.id });

      default:
        return "";
    }
  };

  onNext = () => {
    if (
      (this.state.categoryCount > 1 && this.state.meetingCount > 1) ||
      this.state.categoryCount > 1 ||
      this.state.meetingCount > 1
    ) {
      this.setState({ flag: 2 });
      // this.props.onRouteChange("/training");
    } else if (
      (this.state.categoryCount === 0 && this.state.meetingCount === 0) ||
      this.state.categoryCount === 0 ||
      this.state.meetingCount === 0
    ) {
      this.setState({ flag: 2 });
      this.setState({ next: false });
    } else {
      this.setState({ flag: 1 });
      //training Info
      let trainingInfo = {
        setCategory: this.state.setCategory,
        setTrainingMode: this.state.setTrainingMode,
      };
      this.setState({ trainingState: trainingInfo });
      this.setState({ next: true });
    }
  };

  render() {
    return (
      <div
        className="artce bg-white br3 bb b--black-10  w-100 w-100-m 
       mw7  shadow-5 center pa2 pa2-m"
      >
        <main className="pa2 pa1-m black-80 ">
          <div className="measue w-100 ">
            <fieldset id="registe" className="ba b--transparent ph0 mh0 bb">
              <legend className="f3 fw6 ph0 mh0">Training Application</legend>
              <p className=" mt0">
                Please fill the form below accurately to enable us serve you
                better!.. welcome!
              </p>
              <blockquote className="athelas ml0 mr0 bb mt0  gray-90 bw1 b--gray"></blockquote>
              <div className="  center">
                <p className=" fl  ">We open free account as a bonus</p>
              </div>
            </fieldset>
            <div className=" dib w-100">
              <div className="car bg-cream br3 pa3 bw2 shadow-5 ">
                <input
                  className="fl-m center"
                  type="checkbox"
                  id="Captioning"
                  value="spacejam"
                  onChange={this.selectionChange}
                />
                <div className="">
                  <img
                    src={img}
                    width="150rem"
                    className="card-img-top"
                    alt="itemPhoto"
                  />
                  <div className="card-body ">
                    <label className="card-tite b">Caption 4- Lessons.</label>
                    <label className="card-tex dt mt1">
                      Get trained on Captioning, get insights on the latest
                      captioning tools and more.
                    </label>
                    <label className="btn btn-primary dt mt3 blue">
                      $50.00
                    </label>
                  </div>
                </div>
              </div>

              <div className=" car bg-cream br3 pa3 bw2 shadow-5 ">
                <input
                  className=" "
                  type="checkbox"
                  id="Transcription"
                  value="spacejam"
                  onChange={this.selectionChange}
                />
                <div className="">
                  <img
                    src={img}
                    width="150rem"
                    className="card-img-to "
                    alt="itemPhoto"
                  />
                  <div className="card-bod  ">
                    <label className="card-tite b">
                      Transcription 3- Lesson.
                    </label>

                    <label className=" f5 pa1 dib dt-m  ">
                      Transcription Mini Courses. Recommended equipment / whole
                      truth. Improve Your success with valuable transcription
                      skills.
                    </label>

                    <label className="btn btn-primary dib mt3 blue">
                      $60.00
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="athelas ml0 mr0 bb mt2  gray-80 bw1 b--gray ph0"></blockquote>

            <div className=" pv2">
              <label className="btn dt dt-m btn-primary black">
                I want to join training through
              </label>
            </div>
            <div className=" dt">
              <input
                className=" "
                type="checkbox"
                id="Zoom"
                value="spacejam"
                onChange={this.selectionChange}
              />
              <label className="btn btn-primary ml3  black">Zoom</label>
            </div>
            <div className=" dt ">
              <input
                className="  "
                type="checkbox"
                id="Google"
                value="spacejam"
                onChange={this.selectionChange}
              />
              <label className="btn btn-primary ml3  black">
                Google Meeting
              </label>
            </div>

            <blockquote className="athelas ml0 mr0 bb mt2  gray-80 bw1 b--gray ph0"></blockquote>

            <div className="pv1 pa2 ma2">
              {this.state.flag === 2 && (
                <p className="red fl-l  b ma2 ">
                  {" "}
                  Please Check one training Cateogry and one meeting type.
                </p>
              )}

              <div className="dib fr  grow">
                <label
                  className="f6 h-20 no-underline br-pill ph3  pv2 mb2 dib white bg-blue w4 tc pa3  "
                  onClick={this.onNext}
                >
                  Next
                </label>
              </div>
            </div>
          </div>
        </main>
        {this.state.next === true && (
          <section className="coolbg pa0-m pa0">
            <ReservationInfo onTrainingInfoChange={this.onTrainingInfoChange} />
          </section>
        )}
        {this.state.next2 === true && (
          <section className="coolbg pa0-m pa0">
            <ReservationDate
              reservationState={this.state.reservationInfo}
              trainingState={this.state.trainingState}
            />
          </section>
        )}
      </div>
    );
  }
}

export default Training;
