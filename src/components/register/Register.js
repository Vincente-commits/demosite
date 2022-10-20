import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import validator from "validator";

import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/loginSlice";

import Loader from "react-loader-spinner";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [flag, setFlag] = useState("");
  const [success, setSuccess] = useState("");
  const [foundErr, setFoundErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  // const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  //browser history
  const history = useHistory();

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

  function onEmailChange(event) {
    if (email.length >= 1) {
      setFlag(1);
    } else {
      setFlag(2);
    }
    setEmail(event.target.value);
    validateEmail();
  }

  const onPasswordChange = (event) => {
    if (password.length >= 1) {
      setFlag(1);
    } else {
      setFlag(2);
    }
    setPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    validateEmail();
    if (flag === 1) {
      setIsLoading(true);

      fetch("https://peaceful-lake-35455.herokuapp.com/register", {
        method: "post",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(function (response) {
          if (response.status === 400) {
            throw Error("Unable to register. User perhaps already exists.");
          }
          if (response.status === 417) {
            throw Error("Fill all details");
          }

          if (response === 500) {
            throw Error("could not complete request because of an error");
          }
          return response.json();
        })
        .then((user) => {
          if (user) {
            dispatch(loadUser(user));
            setEmail("");
            setPassword("");
            setSuccess("success");
            setFoundErr(null);
            setIsLoading(null);
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
    }
  };

  return (
    <div className="artie bg-white br3 bb mv4 w-100-m w-100-ns w-50-l pa4  shadow-5 center-l center">
      <fieldset id="registe" className="ba b--transparent ph0 mh0">
        <legend className="f3 b ph0 mh0">Register with Revsite, Today!</legend>
        <div className="measure db mt3 w-100 w-100-m  ">
          <label className="card-text  mt0 b w3 ">Email</label>

          <input
            className="input reset db mt2 ba  b--black-20 pa2 mb2 w-90"
            type="email"
            name="email-address"
            id="email-address"
            onChange={onEmailChange}
          />
        </div>
        {emailError === "not valid" && (
          <p className="card-tite f6 b red">Incorrect email format.</p>
        )}
        <div className="measure db mt3 w-100 w-100-m  ">
          <label className="card-text   mt0 b w3 ">Password</label>

          <input
            className="input reset db mt2 ba  b--black-20 pa2 mb2 w-90"
            type="password"
            name="password"
            id="password"
            onChange={onPasswordChange}
          />
        </div>
      </fieldset>
      {foundErr && <label className="dt b red mv3">{foundErr}</label>}

      {flag === 2 && (
        <p className="card-tite f6 red b">Some fields are incorrect.</p>
      )}
      {success === "success" && (
        <p className="card-tite f4 blue b">
          Account created successfully. Please Login now.
        </p>
      )}
      {success === "not good" && (
        <p className="card-tite f4 red b">Error. Please try again.</p>
      )}
      <div className="lh-copy mt2 pv2 button">
        <label
          onClick={() => history.push("/termsofservice")}
          className="f4 measure  hover-blue dim black "
        >
          By clicking <b className="b f4">"Register"</b> you agree to our EU
          Terms and Conditions.
        </label>
      </div>
      {isLoading && (
        <div className="db mb2">
          <Loader type="Oval" color="#0000FF" height={40} width={80} />
        </div>
      )}
      <div className="">
        <input
          className="f6 link grow  ph3 pv2 mb2  white bg-navy dib"
          type="button"
          value="Register"
          onClick={onSubmitRegister}
        />
      </div>
      <div className="lh-copy mt3 button">
        <label
          onClick={() => history.push("/login")}
          className="f4 blue hover-black dim black db"
        >
          Already have an account? Log in
        </label>
      </div>
    </div>
  );
}

// export default Register;
