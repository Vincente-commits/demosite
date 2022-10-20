// import "../assets/css/style.css";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import validator from "validator";

import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/loginSlice";

import Loader from "react-loader-spinner";

export default function Login() {
  // const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  //history
  const history = useHistory();

  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [flag, setFlag] = useState(null);
  const [foundErr, setFoundErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const validateEmail = () => {
    var emailnew = email;

    if (validator.isEmail(emailnew)) {
      setEmailError("valid");
      setFlag(1);
    } else {
      setEmailError("not valid");
      setFlag(2);
    }
  };
  function onEmailChange(event) {
    if (email.length >= 1) {
      setFlag(1);
    } else {
      setFlag(2);
    }
    setEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    if (password.length >= 1) {
      setFlag(1);
    } else {
      setFlag(2);
    }
    setPassword(event.target.value);
  };

  const onSubmitSignin = () => {
    dispatch(loadUser({ id: 1 }));
    window.location.pathname = "/";
    /*  validateEmail();
    if (email.length === 0 && password.length === 0) {
      setFlag(2);
    } else if (email.length === 0 || password.length === 0) {
      setFlag(2);
    } else {
      setIsLoading(true);

      fetch("https://peaceful-lake-35455.herokuapp.com/login", {
        method: "post",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(function (response) {
          if (response.status === 400) {
            throw Error("Wrong credentials");
          }
          if (response === 500) {
            throw Error("Could not complete request because of an error");
          }

          return response.json();
        })
        .then((user) => {
          if (user[0].id) {
            setFoundErr(null);

            setIsLoading(null);
            dispatch(loadUser(user[0]));

            window.location.pathname = "/";
            setFlag(1);
          } else {
            setFlag(2);
            history.push("/login");

            setFoundErr(null);
            setIsLoading(null);
          }
        })
        .catch((err) => {
          setFoundErr(err.message);
          setIsLoading(null);
          setFlag(1);
        });
    } */
  };

  return (
    <div className="artie bg-white br3 bb mv4 w-100-m w-100-ns w-50-l pa4  shadow-5 center-l center">
      <fieldset id="registe" className="ba b--transparent ph0 mh0">
        <legend className="f4 b ph0 mh0">Welcome, Log in to continue</legend>
        <div className="measure db mt3 w-100 w-100-m  ">
          <label className="card-text dib  mt0 b w3 ">Email</label>

          <input
            className="input reset db mt2 ba  b--black-20 pa2 mb2 w-90"
            type="text"
            name="email"
            placeholder="Email"
            id="email-address"
            onChange={onEmailChange}
          />

          {emailError === "not valid" && (
            <p className="card-tite f6 b red">Incorrect email format.</p>
          )}
        </div>
        <div className="measure db mt3 w-100 w-100-m  ">
          <label className="card-text dib  mt0 b w3 ">Password</label>

          <input
            className="input reset db mt2 ba  b--black-20 pa2 mb2 w-90"
            type="password"
            name="password"
            id="password"
            onChange={onPasswordChange}
          />
        </div>
        {flag === 2 && (
          <label className="red b db">
            Incorrect details! Check your details.
          </label>
        )}

        {foundErr && <label className="dt red  pb2">{foundErr}</label>}
      </fieldset>
      {isLoading && (
        <div className="db mb2">
          <Loader type="Oval" color="#0000FF" height={40} width={80} />
        </div>
      )}
      <div className="">
        <label
          onClick={onSubmitSignin}
          className="f6 link dim  ph3 pv2 mb2  white bg-navy dib"
        >
          Login
        </label>
        <div className="lh-copy mt3 fr-l ">
          <label
            onClick={() => history.push("/forgotpass")}
            className="f4 blue hover-black dim black dib"
          >
            Forgot your password?
          </label>
        </div>
      </div>
      <div className="lh-copy mt3 button ">
        <label
          onClick={() => history.push("/register")}
          className="f4 blue hover-black dim black db"
        >
          Don't have an account? Register
        </label>
      </div>
    </div>
  );
}
// export default Login;
