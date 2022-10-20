import React from "react";

import BuyerInfo from "./BuyerInfo";

import Home from "../home/Home";

import img from "../assets/img/revsiteLogo.png";

class ShopcartParams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 1,
      buy: false,
      accountType: "",
      setPurchaseMode: "",
      list: ["directpurchase", "book", "installments"],
      directPurchase: false,
      withCategory: null,
      isValid: null,
    };
  }

  onBuyChange = (event) => {
    this.setState({ buy: true });
    this.setState({ accountType: event.target.id });
    this.setState({ withCategory: event.target.id });
  };

  selectionChange = (event) => {
    // this.setState({ setPurchaseMode: event.target.id });

    if (event.target.checked === false) {
      this.setState({ directPurchase: false });
      // this.props.onRouteChange("/buy");
    } else if (event.target.checked === true) {
      this.setState({ setPurchaseMode: event.target.id });
      this.setState({ directPurchase: true });
      // this.props.onRouteChange("/buy/buyerInfo");
    }
  };

  onNext = () => {
    if (this.state.directPurchase === false) {
      this.setState({ flag: 2 });
      // this.props.onRouteChange("/buy");
    } else if (this.state.directPurchase === true) {
      this.setState({ flag: 1 });
      // this.props.onRouteChange("/buy/buyerInfo");
    }
  };

  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get("id");

    fetch("http://localhost:3000/validate", {
      method: "post",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        id: foo,
      }),
    })
      .then(function (response) {
        if (response.status === 404 || response.status === 400) {
          throw Error("Wrong credentials");
        }
        if (response === 500) {
          throw Error("Could not complete request because of an error");
        }

        return response.json();
      })
      .then((user) => {
        if (user) {
          this.setState({ isValid: true });

          //load data
        } else {
          //dont load
          this.setState({ isValid: null });
        }
      })
      .catch((err) => {
        this.setState({ isValid: null });
      });
  }

  render() {
    switch (this.state.isValid) {
      case true:
        return (
          <div className="measu  bg-white br3 bb b--black-10   w-70-l w-100-m shadow-5 center ">
            <div className="car w-30-l bg-lightest-blue dib-l  w-90-m br3 pa3 pa3-m ma3 ma3-m bw2 shadow-5 ">
              <div className="w-50 dt dt-m center ">
                <img
                  src={img}
                  width="90%"
                  className="card-img-top "
                  alt="itemPhoto"
                />
              </div>
              <div className="card-bod ">
                <label className="card-title b f3 dt center pa2">
                  Captioning
                </label>
                <label className="card-text f4 dt center pa2">
                  Ready made & Verified
                </label>
                <label className="btn  btn-primary orange b f3 dt center pa2">
                  $ 550
                </label>
              </div>
              <div className="dt center ">
                <p
                  id="Captioning"
                  className=" grow no-underline br-pill ph3 pv2 mt0 dib white bg-dark-blue f4 b "
                  onClick={this.onBuyChange}
                >
                  Get Now
                </p>
              </div>
            </div>
            {this.state.buy === true &&
              this.state.withCategory === "Captioning" && (
                <div className="mv3 pa3 mt4 ">
                  {this.state.buy === true && (
                    <div className="mv1 db">
                      <label className="dt f4 pv3 ">
                        You have selected{" "}
                        <b className="underline">{this.state.accountType}</b>
                      </label>
                      <label className=" b f4">Select purchase Mode</label>
                      <div className="mt3">
                        {/* {purchaseMode === "Direct Purchase" && isChecked &&( */}

                        <input
                          className="dib  "
                          type="checkbox"
                          id="Direct Purchase"
                          value=""
                          defaultChecked={this.state.directPurchase}
                          onChange={this.selectionChange}
                        />

                        {/* )} */}

                        <label className="ml3 fw6 f5" htmlFor="password">
                          Direct Purchase (Recommended)
                        </label>
                      </div>
                      <label className="dt f4 mt4 mb2 ">
                        <b className="underline">Yet to be implemented</b>
                      </label>
                      <div className="mt2">
                        {/* {purchaseMode === "BookMe" && ( */}
                        <input
                          className="dib  "
                          type="checkbox"
                          id="BookMe"
                          value=""
                          disabled={true}
                          defaultChecked={this.state.book}
                          onChange={this.selectionChange}
                        />
                        {/* )} */}

                        <label className="ml3 fw6 f5" htmlFor="password">
                          Book Me One
                        </label>
                      </div>
                      <div className="mt3">
                        {/* {purchaseMode === "Installments" && ( */}
                        <input
                          className="dib  "
                          type="checkbox"
                          id="Installments"
                          disabled={true}
                          value=""
                          defaultChecked={this.state.installments}
                          onChange={this.selectionChange}
                        />
                        {/* )} */}

                        <label
                          className="ml3 fw6 f5"
                          htmlFor="installments purchase"
                        >
                          Installments Purchase
                        </label>
                      </div>

                      <div className="pv3 mb3 dt">
                        {this.state.flag === 2 && (
                          <p className="red ">
                            {" "}
                            Please Check one purchase Mode
                          </p>
                        )}

                        <label
                          className="getstarted pa2  "
                          onClick={this.onNext}
                        >
                          Next
                        </label>
                      </div>
                    </div>
                  )}
                  {this.state.directPurchase === true && (
                    <BuyerInfo accountType={this.state.accountType} />
                  )}
                </div>
              )}
            <div className="car w-30-l bg-lightest-blue dib-l  w-90-m br3 pa3 pa3-m ma3 ma3-m bw2 shadow-5 ">
              <div className="w-50 dt dt-m center ">
                <img
                  src={img}
                  width="90%"
                  className="card-img-top "
                  alt="itemPhoto"
                />
              </div>
              <div className="card-body ">
                <label className="card-title b f3 dt center pa2">
                  Transcription
                </label>
                <label className="card-text f4 dt center pa2">
                  Ready & Verified
                </label>
                <label className="btn btn-primary orange b f3 dt center pa2">
                  $ 550
                </label>
              </div>
              <div className="dt center ">
                <p
                  id="Transcription"
                  className=" grow no-underline br-pill ph3 pv2 mt0 dib white bg-dark-blue f4 b "
                  onClick={this.onBuyChange}
                >
                  Get Now
                </p>
              </div>
            </div>
            {this.state.buy === true &&
              this.state.withCategory === "Transcription" && (
                <div className="mv3 pa3 mt4 ">
                  {this.state.buy === true && (
                    <div className="mv1">
                      <label className="dt f4 pv3 ">
                        You have selected{" "}
                        <b className="underline">{this.state.accountType}</b>
                      </label>
                      <label className=" b f4">Select purchase Mode</label>
                      <div className="mt3">
                        {/* {purchaseMode === "Direct Purchase" && isChecked &&( */}

                        <input
                          className="dib  "
                          type="checkbox"
                          id="Direct Purchase"
                          value=""
                          defaultChecked={this.state.directPurchase}
                          onChange={this.selectionChange}
                        />

                        {/* )} */}

                        <label className="ml3 fw6 f5" htmlFor="password">
                          Direct Purchase (Recommended)
                        </label>
                      </div>
                      <label className="dt f4 mt4 mb2 ">
                        <b className="underline">Yet to be implemented</b>
                      </label>
                      <div className="mt2">
                        {/* {purchaseMode === "BookMe" && ( */}
                        <input
                          className="dib  "
                          type="checkbox"
                          id="BookMe"
                          value=""
                          disabled={true}
                          defaultChecked={this.state.book}
                          onChange={this.selectionChange}
                        />
                        {/* )} */}

                        <label className="ml3 fw6 f5" htmlFor="password">
                          Book Me One
                        </label>
                      </div>
                      <div className="mt3">
                        {/* {purchaseMode === "Installments" && ( */}
                        <input
                          className="dib  "
                          type="checkbox"
                          id="Installments"
                          disabled={true}
                          value=""
                          defaultChecked={this.state.installments}
                          onChange={this.selectionChange}
                        />
                        {/* )} */}

                        <label
                          className="ml3 fw6 f5"
                          htmlFor="installments purchase"
                        >
                          Installments Purchase
                        </label>
                      </div>

                      <div className="pv3 mb3 dt">
                        {this.state.flag === 2 && (
                          <p className="red ">
                            {" "}
                            Please Check one purchase Mode
                          </p>
                        )}

                        <label
                          className="getstarted pa2  "
                          onClick={this.onNext}
                        >
                          Next
                        </label>
                      </div>
                    </div>
                  )}
                  {this.state.directPurchase === true && (
                    <BuyerInfo accountType={this.state.accountType} />
                  )}
                </div>
              )}

            <div className="car w-30-l bg-lightest-blue dib-l  w-90-m br3 pa3 pa3-m ma3 ma3-m bw2 shadow-5 ">
              <div className="w-50 dt dt-m center ">
                <img
                  src={img}
                  width="90%"
                  className="card-img-top "
                  alt="itemPhoto"
                />
              </div>
              <div className="card-body ">
                <label className="card-title b f4 dt center pa2">
                  Translation and Subtitling
                </label>
                <label className="card-text f4 dt center pa2">
                  Ready & Verified
                </label>
                <label className="btn btn-primary orange b f3 dt center pa2">
                  $ 450
                </label>
              </div>

              <div className="dt center ">
                <p
                  id="Translation"
                  className=" grow no-underline br-pill ph3 pv2 mt0 dib white bg-dark-blue f4 b "
                  onClick={this.onBuyChange}
                >
                  Get Now
                </p>
              </div>
            </div>
            {this.state.buy === true &&
              this.state.withCategory === "Translation" && (
                <div className="mv3 pa3 mt4 ">
                  {this.state.buy === true && (
                    <div className="mv1">
                      <label className="dt f4 pv3 ">
                        You have selected{" "}
                        <b className="underline">{this.state.accountType}</b>
                      </label>
                      <label className=" b f4">Select purchase Mode</label>
                      <div className="mt3">
                        {/* {purchaseMode === "Direct Purchase" && isChecked &&( */}

                        <input
                          className="dib  "
                          type="checkbox"
                          id="Direct Purchase"
                          value=""
                          defaultChecked={this.state.directPurchase}
                          onChange={this.selectionChange}
                        />

                        {/* )} */}

                        <label className="ml3 fw6 f5" htmlFor="password">
                          Direct Purchase (Recommended)
                        </label>
                      </div>
                      <label className="dt f4 mt4 mb2 ">
                        <b className="underline">Yet to be implemented</b>
                      </label>
                      <div className="mt2">
                        {/* {purchaseMode === "BookMe" && ( */}
                        <input
                          className="dib  "
                          type="checkbox"
                          id="BookMe"
                          value=""
                          disabled={true}
                          defaultChecked={this.state.book}
                          onChange={this.selectionChange}
                        />
                        {/* )} */}

                        <label className="ml3 fw6 f5" htmlFor="password">
                          Book Me One
                        </label>
                      </div>
                      <div className="mt3">
                        {/* {purchaseMode === "Installments" && ( */}
                        <input
                          className="dib  "
                          type="checkbox"
                          id="Installments"
                          disabled={true}
                          value=""
                          defaultChecked={this.state.installments}
                          onChange={this.selectionChange}
                        />
                        {/* )} */}

                        <label
                          className="ml3 fw6 f5"
                          htmlFor="installments purchase"
                        >
                          Installments Purchase
                        </label>
                      </div>

                      <div className="pv3 mb3 dt">
                        {this.state.flag === 2 && (
                          <p className="red ">
                            {" "}
                            Please Check one purchase Mode
                          </p>
                        )}

                        <label
                          className="getstarted pa2  "
                          onClick={this.onNext}
                        >
                          Next
                        </label>
                      </div>
                    </div>
                  )}
                  {this.state.directPurchase === true && (
                    <BuyerInfo accountType={this.state.accountType} />
                  )}
                </div>
              )}
          </div>
        );

      default:
        return <Home />;
    }
  }
}

export default ShopcartParams;
