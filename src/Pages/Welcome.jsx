import React from "react";
import { BeveledButton } from "../Components/Buttons";
import { useNavigate } from "react-router-dom";
import "../Styles/Welcome.css";
import { colors, sizes } from "../Data/DataModels";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div className="top-view">
        <div className="top-row">
          <div>logo</div>
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: sizes.MARGIN_MIN,
            }}
          >
            <BeveledButton
              placeholder={"Get Started"}
              onClick={() => navigate("/signup")}
            />
            <BeveledButton
              placeholder={"LogIn"}
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
          }}
        >
          <div
            style={{
              fontSize: sizes.FONT_MAX,
              textAlign: "center",
            }}
          >
            Enjoy The Experience of Finding your New Home
          </div>
          <div
            style={{
              fontSize: sizes.FONT_MID,
              textAlign: "center",
            }}
          >
            Immerse yourself in our state of the art marketplace It"s not just
            about the home, it"s about the experience
          </div>
        </div>
        <div style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: "black",
          color: colors.text2,
          padding: sizes.PADDING_MID,
          width: 300,
          fontSize: sizes.FONT_MIN
        }}>
          <div>S.P.A Residences</div>
          <div>12A, Augusta Amadi Str,Orchid Rd, LEkki, 106104, Lagos.</div>
          <div>Learn More</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Welcome;
