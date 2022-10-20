import React, { useState } from "react";

import validator from "validator";

import Loader from "react-loader-spinner";

export default function ForgotPass(params) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [flag, setFlag] = useState(1);
  const [success, setSUccess] = useState(null);
  const [foundErr, setFoundErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const validateEmail = () => {
    var emailnew = email;

    if (validator.isEmail(emailnew)) {
      setEmailError("valid");
      setFlag(2);
    } else {
      setEmailError("not valid");
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

  const onResetPass = () => {
    validateEmail();
    if (flag === 2) {
      setIsLoading(true);
      fetch("https://peaceful-lake-35455.herokuapp.com/forgotpass", {
        method: "post",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then(function (response) {
          if (!response.ok) {
            throw Error("could not complete request because of an error");
          }
          return response.json();
        })
        .then((loginEmail) => {
          if (loginEmail >= 1) {
            setSUccess("success");

            setFoundErr(null);
            setIsLoading(null);
          } else {
            setSUccess("not good");

            setFoundErr(null);
            setIsLoading(null);
          }
        })
        .catch((err) => {
          setFoundErr(err.message);
          setSUccess("not good");
          setIsLoading(null);
        });
    } else {
    }
  };

  return (
    <article className="artic bg-white br3 bb b--black-10 mv4 center pa4 w-100-m w-50-l mw7 shadow-5  ">
      <legend className="f4 measure fw6 ph0 mh0">
        Reset Your Password and check email for a password reset.
      </legend>
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
      {success === "not good" && (
        <p className="red">
          Error! Check if email is correct. {"  "} {foundErr}
        </p>
      )}
      {success === "success" && (
        <p className="blue b">Password successfully reset.</p>
      )}
      {isLoading && (
        <div className="db mt2 mb2">
          <Loader type="Oval" color="#0000FF" height={40} width={80} />
        </div>
      )}

      <label
        className="grow no-underline br-pill mt2  dib ph3 pv2 black bg-light-blue f4 b b--transparent "
        onClick={onResetPass}
      >
        Reset Password
      </label>
    </article>
  );
}

// export default ForgotPass;
