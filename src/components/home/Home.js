import React, { useState } from "react";

export default function Home({
  setRevandAbout,
  setRejectbyRev,
  setRevReview,
  setRevApplication,
  setAboutRev,
  setComonReason,
}) {
  //learn more
  const [learnMore, setLearnMore] = useState(null);
  const [primary, setPrimary] = useState("red b db mv2 hover-red");

  function showLearnMore1() {
    if (!learnMore) {
      return (function setvalues() {
        setLearnMore("1");
        setPrimary("red b db mv2 hover-blue");
      })();
    } else {
      setLearnMore(null);
      setPrimary("red b db mv2 hover-red");
    }
  }

  function showLearnMore3() {
    if (!learnMore) {
      return (function setvalues() {
        setLearnMore("3");
        setPrimary("red b db mv2 hover-blue");
      })();
    } else {
      setLearnMore(null);
      setPrimary("red b db mv2 hover-red");
    }
  }
  function showLearnMore4() {
    if (!learnMore) {
      return (function setvalues() {
        setLearnMore("4");
        setPrimary("red b db mv2 hover-white");
      })();
    } else {
      setLearnMore(null);
      setPrimary("red b db mv2 hover-red");
    }
  }
  function showLearnMore5() {
    if (!learnMore) {
      return (function setvalues() {
        setLearnMore("5");
        setPrimary("red b db mv2 hover-white");
      })();
    } else {
      setLearnMore(null);
      setPrimary("red b db mv2 hover-red");
    }
  }
  function showLearnMore6() {
    if (!learnMore) {
      return (function setvalues() {
        setLearnMore("6");
        setPrimary("red b db mv2 hover-blue");
      })();
    } else {
      setLearnMore(null);
      setPrimary("red b db mv2 hover-red");
    }
  }

  return (
    <div className="">
      <legend className="ttu b f1-l  ma3-m  center-m  f3 b-m center  ">
        Rev Training Program
      </legend>

      <div className="ph3 mh3">
        <legend className=" b ml3-m  f4-l center-m f5-m pa2 center mb4">
          Training on Online Captioning, Transcription and Translation.
        </legend>
      </div>
      <section className="bg-navy white pt3">
        <legend className=" b f2 fw9 pa2 center mt4" ref={setRevandAbout}>
          Revsite and About
        </legend>
        <div className="center w-80 mt4 pb3  ">
          <p className="fw5 f4">
            We offer proper training for Transcription, Caption, and Translation
            following the Rev style guide. It’s great to find a legitimate
            opportunity to make money while enjoying the flexibility of working
            from the comfort of your home.{" "}
          </p>
          {learnMore === "1" && (
            <div className="pa1">
              <p className="fw5 white f4">
                Rev.com is the best company offering jobs for transcription
                caption and foreign subtitles. Working for Rev as a freelancer
                is not an easy job. It is a skill that requires proper training
                and mentorship. So, before working or getting to the{" "}
                <a className="blue hover" href="www.rev.com">
                  Rev.com
                </a>{" "}
                application fast apply for{" "}
                <a className="blue hover" href="/training">
                  Training Courses
                </a>{" "}
                to gain more tips for getting started and making the most of
                your new gig.
              </p>
            </div>
          )}
          <label className={primary} onClick={showLearnMore1}>
            {" "}
            Learn More
          </label>
        </div>
      </section>

      {/* section */}
      <section className="bg-white navy pt1 w-100-m">
        <legend className=" b f2 fw9  center mt4" ref={setRejectbyRev}>
          Rejected by rev.com
        </legend>
        <div className="center w-80  mt4 pb1 ">
          <p className="fw5 f4 center ">
            If your Rev application is rejected, you can reapply 45 days later.
            But in order to pass the test and open rev account you need to take
            Training Courses and escape rejection.
          </p>
        </div>
      </section>
      <section className="bg-white black pt1 w-100-m">
        <legend className=" b f2 fw9  center mt5" ref={setRevReview}>
          Rev Review.
        </legend>
        <div className="center w-80  mt4 pb1 ">
          <p className="fw5 f4 center center-m">
            Rev company was founded in August 2010 after getting funding from
            Globespan Capital Partners, and its existence has revolutionized the
            speech-to-text industry.
          </p>
          {learnMore === "3" && (
            <div className="pa1 fw5 f4 center center-m">
              <p>
                Rev has an awesome online working portal that supports clients
                who upload files and the freelancers who work on them. The best
                part is that they have a really flexible working schedule. They
                have a work portal that allows you to pick the jobs that you
                like on a daily basis. It does not matter what time of the day
                it is. You can work as much as you want or as little as you
                want. Another great thing about this company is their well never
                dries out. Unlike other transcription companies where you find a
                dry spell and there is no work. With Rev, whether it is a Sunday
                or a Wednesday or Christmas work is always available.
              </p>
            </div>
          )}
          <label className={primary} onClick={showLearnMore3}>
            {" "}
            Learn More
          </label>
        </div>
      </section>

      <section className="bg-light-green black pt1">
        <legend className=" b f2 fw9  center mt2" ref={setRevApplication}>
          Rev Application Process
        </legend>
        <div className="center w-80 mt1 pb2 ">
          <p className="fw5 f4  center ">
            <b className="b red ">1.Training</b> – To pass the test you need to
            apply Revsite Training Courses
          </p>
          <p className="fw5 f4  center ">
            <b className="b red ">2.Contact</b> – You fill in your contact
            details like full names andemail address.
          </p>
          <p className="fw5 f4  center ">
            {" "}
            <b className="b red">3.Grammar</b> – Here, you are tested on how to
            form/use good sentence structures.
          </p>
          <p className="fw5 f4  center ">
            <b className="b red">4.Writing</b> – You are expected to write a 1
            or 2 paragraph story to see how well you understand English.{" "}
          </p>
          <p className="fw5 f4  center ">
            <b className="b red">5.Transcribe</b> – This is where the real
            transcription takes place.
          </p>
          {learnMore === "4" && (
            <div className="pa1 ">
              <p className="fw5 f4  center">
                You are given a Rev transcription style guide to read and master
                and a short audio file to complete thereafter. When you finish
                you click on Submit button. Immediately, you will receive a
                message thanking you for completing the application process.{" "}
                <b>
                  [ Apply Training courses get free application guide and
                  answers]
                </b>
              </p>
            </div>
          )}
          <label className={primary} onClick={showLearnMore4}>
            {" "}
            Learn More
          </label>
        </div>
      </section>
      <section className="bg-navy white pt1">
        <legend className=" b f2 fw9 pa2 center mt2" ref={setAboutRev}>
          About Rev and Services
        </legend>
        <div className="center w-80 mt4 pb2 ">
          <p className="fw5 f4  center ">
            For you to start working at Rev.com, you must have fast typing
            skills, a good command of the English language, and a PayPal account
            that has no restrictions.
          </p>
          {learnMore === "5" && (
            <div className="pa1">
              <p className="fw5 f4  center">
                Your fast typing and good grammar skills will come in handy when
                taking their 60-minute test that you must complete accurately.
                (Before taking the test first apply for Training Courses to gain
                more tips for getting started and make the most out of your new
                gig.)
              </p>

              <p className="fw5 f4  center ">
                Rev test is a five-step application process that should take
                you, at least 60 minutes to complete. I know you may ask, “A
                whole 1 hour?” Yes. Nothing comes easy in this world. That is
                why you need proper training from Revsite and put in some effort
                to see great results. Want to be part of Rev? click here and get
                started. You will see the Rev.com sign-up page. Equipment you
                need a working computer, a high-speed internet connection, a
                quality headset (preferably noise-canceling ones). In addition,
                you should install Firefox, Brave, or Chrome as one of your
                browsers and get the latest Adobe Flash Player for easy access
                of files through their portal.
              </p>
              <p className="fw5 f4  center ">
                If hired and complete the verification part, you will work on
                files in academic realms, focus group meetings, business, and
                more. Freelancers can earn up to $1000 per month. They have an
                easy-to-use platform for claiming jobs and submitting them when
                completed. They also have a forum where Revvers can share and
                express their views on how best they can serve the customers.
                Payment is weekly via PayPal and work is available 24/7.
              </p>
            </div>
          )}
          <label className={primary} onClick={showLearnMore5}>
            {" "}
            Learn More
          </label>
        </div>
      </section>
      <section className="bg-washed-green black pt1">
        <legend className=" b f2 fw9 pa2 center mt2" ref={setComonReason}>
          Common Reasons for Deactivation
        </legend>
        <div className="center w-80 mt4 pb5 ">
          <p className="fw5 f4  center ">
            <b>Quality</b> <br />
            Rev may close accounts that do not meet our quality standards.{" "}
          </p>

          {learnMore === "6" && (
            <div className="pa1">
              <p className="fw5 f4  center ">
                <b>Age</b> <br />
                Per Rev's Terms of Service, freelance agents must be at least 18
                years of age or older. If your account was closed for being a
                minor, you may reapply when you turn 18.
              </p>
              <p className="fw5 f4  center ">
                <b>ID/Location Requirement</b> <br />
                Freelance agents must be physically located in an approved area,
                and you must have official identification from an approved
                location to do caption or transcription freelance work with Rev.
                Here is the current list of accepted locations:
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://support.rev.com/hc/en-us/articles/360048869551-Where-does-Rev-accept-freelancers-from-"
                >
                  Here
                </a>
              </p>
              <p className="fw5 f4  center ">
                <b>Verification </b> <br />
                To work in Rev, you have to verify your Identity. But you will
                find it difficult to pass the verification part at all you are
                using legit details and location. That is why revsite.com is
                here for the verification process non of your details will be
                required
              </p>
            </div>
          )}
          <label className={primary} onClick={showLearnMore6}>
            {" "}
            Learn More
          </label>
        </div>
      </section>
    </div>
  );
}

// export default Home;
