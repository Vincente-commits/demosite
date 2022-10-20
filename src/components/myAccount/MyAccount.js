import React, { useState } from "react";

import validator from "validator";

import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/loginSlice";

import Loader from "react-loader-spinner";

export default function MyAccount() {
  // const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  //browser history
  const history = useHistory();

  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [flag, setFlag] = useState(1);
  const [success, setSuccess] = useState(null);
  const [foundErr, setFoundErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const validateEmail = () => {
    var emailval = email;

    if (validator.isEmail(emailval)) {
      setEmailError("valid");

      setFlag(1);
    } else {
      setEmailError("not valid");

      setFlag(2);
    }
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);

    // this.onUpdate();
  };
  const onConfirmPasswordChange = (event) => {
    setConfirmPass(event.target.value);
  };
  let signinCookie = Cookies.get("id");

  const onUpdateAcc = () => {
    validateEmail();
    if (email.length >= 1 && password.length >= 1 && confirmPass.length >= 1) {
      setIsLoading(true);

      fetch("https://peaceful-lake-35455.herokuapp.com/update", {
        method: "post",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
          id: signinCookie,
          email: email,
          password: password,
          confirmPass: confirmPass,
        }),
      })
        .then(function (response) {
          if (response.status === 400) {
            setIsLoading(null);

            throw Error("Wrong credentials");
          }
          if (response.status === 417) {
            setIsLoading(null);

            throw Error("Fill all details");
          }
          if (response === 500) {
            setIsLoading(null);

            throw Error("could not complete request because of an error");
          }

          return response.json();
        })
        .then((loginEmail) => {
          if (loginEmail) {
            //redux to update
            dispatch(loadUser(loginEmail));
            setSuccess("success");
            setEmail("");
            setPassword("");
            setConfirmPass("");
            setFlag(1);
            setFoundErr(null);
            setIsLoading(null);
            window.location.pathname = "/";
          } else {
            setSuccess("not good");
            setFoundErr(null);
            setIsLoading(null);
          }
        })
        .catch((err) => {
          setSuccess("got error");

          setFoundErr(err.message);
          setIsLoading(null);
        });
    } else if (
      email.length === 0 ||
      password.length === 0 ||
      confirmPass.length === 0
    ) {
      setFlag(2);
    }
  };

  return (
    <div className="artice bg-white br3 bb  mv3  w-100-m w-50-l mw7 shadow-5 center">
      <div className="measue center pa4 ">
        <legend className="f3 fw6 ph0 mh0">My Account</legend>
        <p className="card-tite f6 b navy">
          Change Password by entering current and adding New. Check to see
          email.
        </p>

        <div className="mt3 ">
          <label className="db fw6 lh-copy f4" htmlFor="email-address">
            Email
          </label>
          <input
            className="pa2 input-rese ba bg-transparent  hover-black w-50-l w-100-m w-100"
            type="email"
            name="email-address"
            placeholder={email}
            onChange={onEmailChange}
          />
        </div>
        {emailError === "not valid" && (
          <p className="card-tite f6 b red">Incorrect email format.</p>
        )}
        <div className="mv3">
          <label className="db fw6 lh-copy f4" htmlFor="password">
            Current Password
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent  hover-black w-50-l w-100-m w-100"
            type="password"
            name="password"
            // value={propsPassword}
            onChange={onPasswordChange}
          />
          <div className="mv2 ">
            <div className="mv1">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                New Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-black w-50-l w-100-m w-100 "
                type="password"
                name="password"
                onChange={onConfirmPasswordChange}
              />
              <label
                className="mt1  dt fr b ph1 pv2  hover-black blue pointer f5 "
                onClick={() => history.push("/forgotpass")}
              >
                {" "}
                Forgot your Password?
              </label>
            </div>
          </div>
        </div>
        {flag === 2 && (
          <p className="card-tite f6 red b">Some fields are incorrect.</p>
        )}
        {success === "success" && (
          <p className="card-tite f6 b blue">
            Account Password change was successful.
          </p>
        )}

        {success === "not good" && (
          <p className="card-tite f6 b red">Wrong Credentials.</p>
        )}
        {foundErr && (
          <div className="bg-white shadow-5 br3 black center dib">
            <label className="dt center pa3">{foundErr}</label>
          </div>
        )}
        {isLoading && (
          <div className="db mt2 mb2">
            <Loader type="Oval" color="#0000FF" height={40} width={80} />
          </div>
        )}

        <div className="mv2 dib ">
          <label
            className="grow no-underline br-pill ph3 pv2 black bg-light-blue f4 b b--transparent dib"
            onClick={onUpdateAcc}
          >
            Update{" "}
          </label>
        </div>
      </div>
    </div>
  );
}

// export default MyAccount;
