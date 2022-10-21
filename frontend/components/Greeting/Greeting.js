import "regenerator-runtime/runtime";
import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Greeting.module.css";

const pages = [
  {
    title: "CREATOR",
    href: "/SelfIntro",
  },
  {
    title: "INVESTOR",
    href: "/SelfIntro",
  },
  {
    title: "CONSUMER",
    href: "/SelfIntro",
  },
];

export default function Greeting({ isSignedIn, helloNEAR, wallet }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <span className={Styles.font1}>
          HELLO <br /> WELCOME TO MULTI-OURS
        </span>
        <div className={Styles.wrapper2}>
          {pages.map((page, idx) => (
            <Link
              to={isSignedIn ? page.href : "/"}
              key={idx}
              style={{ color: "white" }}
            >
              <span
                key={idx}
                className={Styles.box1}
                onClick={() => {
                  if (isSignedIn) {
                    console.log("signed in");
                  } else {
                    wallet.signIn();
                  }
                }}
              >
                {page.title}
              </span>
            </Link>
          ))}
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
