import "regenerator-runtime/runtime";
import React from "react";

import Styles from "./Greeting.module.css";

import {
  EducationalText,
  SignInPrompt,
  SignOutButton,
} from "../../ui-components";

export default function Greeting({ isSignedIn, helloNEAR, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    helloNEAR
      .getGreeting()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  function changeGreeting(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    const { greetingInput } = e.target.elements;
    helloNEAR
      .setGreeting(greetingInput.value)
      .then(async () => {
        return helloNEAR.getGreeting();
      })
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <span className={Styles.font1}>
          HELLO <br /> WELCOME TO MULTI-OURS
        </span>
        <div className={Styles.wrapper2}>
          <span className={Styles.box1}>CREATOR</span>
          <span className={Styles.box1}>INVESTOR</span>
          <span className={Styles.box1}>CONSUMER</span>
        </div>
        <img
          src={require("../../assets/images/index-graphic1.png")}
          className={Styles.graphic1}
        />
        <img
          src={require("../../assets/images/index-graphic2.png")}
          className={Styles.graphic2}
        />
      </div>
    </div>
  );
}
