import "regenerator-runtime/runtime";
import React from "react";

import Styles from "./SelfIntro.module.css";

const GNB = () => {
  return (
    <div className={Styles.GNB_container}>
      <div className={Styles.wrapper2}>
        <img
          src={require("../../assets/images/back-arrow-circle.png")}
          className={Styles.back_arrow}
        />
        <span className={Styles.font5}>SELF-INTRODUCTION</span>
      </div>

      <span className={Styles.font6}>CREATOR</span>
    </div>
  );
};

const data = [
  {
    title: "WORKING STYLE",
    contents: ["Generous", "Relaxed", "Fast"],
  },
  {
    title: "WORKING SPACE",
    contents: ["FIGMA", "PHOTOSHOP", "XD"],
  },
  {
    title: "PERSONALITY",
    contents: ["ACTIVE", "CALM", "FUN"],
  },
  {
    title: "ABILITY",
    contents: ["Responsibility", "Driven", "Leadership"],
  },
];

export default function SelfIntro({ isSignedIn, helloNEAR, wallet }) {
  return (
    <div className={Styles.container}>
      <GNB />
      <div className={Styles.wrapper}>
        <div className={Styles.wrapper4}>
          <div className={Styles.wrapper3}>
            <div className={Styles.profile_img_circle}>
              <img src={require("../../assets/images/youngseo-image.png")} />
            </div>
            <span className={Styles.font1}>UI/UX Designer</span>
            <span className={Styles.font2}>CHO YOUNGSEO</span>
          </div>
          <div className={Styles.wrapper5}>
            {data.map((x, idx) => (
              <div key={idx} className={Styles.attributes_category}>
                <span className={Styles.font4}>{x.title}</span>
                <div className={Styles.attributes_container}>
                  {x.contents.map((y, idx) => (
                    <div className={Styles.attribute_box}>
                      <span key={idx} className={Styles.font3}>
                        {y}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
