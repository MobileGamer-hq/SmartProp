import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Welcome.css";

import { BeveledButton, BorderBevelButton } from "../Components/Buttons";
import { colors, sizes } from "../Data/DataModels";

import about from "../Images/about-image.png"
import why_us from "../Images/why-us.png"
import find_home_buyer from "../Images/find-home-welcome-buyer.png"
import buy_home_buyer from "../Images/buy-home-welcome-buyer.png"
import ar_home from "../Images/AR-welcome-buyer.png"
import HeaderBar from "../Components/HeaderBar";
import for_sale from "../Images/for-sale.png"
import for_rent from "../Images/for-rent.png"
import find_home from "../Images/find-home.png"
import buy_home from "../Images/Buy-home.png"
import Logo from "../Components/Logo";

function Welcome() {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/sign-up")
  }

  const logIn = () => {
    navigate("/log-in")
  }

  const learnMore = () => {
    navigate("/learn-more")
  }

  return (
    <div className="welcome">
      <section className="welcome-top">
        <HeaderBar showButton={true} getStarted={getStarted} logIn={logIn}/>
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: sizes.FONT_TITLE, color: colors.secondary, textWrap: "wrap", width: 900, textAlign: "center" }}>Enjoy The Experience of Finding your New Home</div>
          <BeveledButton placeholder={"Get Started"} fontSize={sizes.BUTTON_FONT_LARGE} height={sizes.BUTTON_HEIGHT_LARGE} width={sizes.BUTTON_WIDTH_MEDIUM} onClick={getStarted}/>
        </div>
      </section>
      <section className="welcome-about">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", paddingTop: 80 }}>
          <div>
            <div style={{ fontSize: sizes.FONT_MAX, color: colors.text, textWrap: "wrap", textAlign: "center" }}>What Is SmartProp?</div>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", textAlign: "center" }}>Secure . Marketplace . And . Real-Time . Technologies for PROPerties</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 10 }}>
            <div style={{ margin: 20, display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start" }}>
              <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", width: 350, textAlign: "left", marginBottom: 20 }}>We know the process of finding, buying, and selling a HOUSE can be cumbersome, and tiring, and we are here ease up that process for you, giving you peace of mind as you acquire your new property.</div>
              <BorderBevelButton placeholder={"Learn More"} width={sizes.BUTTON_WIDTH_MEDIUM} onClick={learnMore}/>
            </div>
            <div style={{ margin: 20 }}>
              <img style={{ width: 400 }} src={about} />
            </div>
          </div>
        </div>
      </section>
      <section className="welcome-why-us">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", paddingTop: 80 }}>
          <div>
            <div style={{ fontSize: sizes.FONT_MAX, color: colors.text2, textWrap: "wrap", textAlign: "center" }}>Why Us?</div>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center" }}>FIND, BUY, and SELL like never before</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 10 }}>
            <div style={{ margin: 20 }}>
              <img style={{ width: 400 }} src={why_us} />
            </div>
            <div style={{ margin: 20, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", width: 350, textAlign: "right", marginBottom: 20 }}>SMARTPROP eases the house hunting, buying, and selling processes by putting them all together on one online platform.</div>
              <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", width: 350, textAlign: "right", marginBottom: 20 }}>Enjoy the convenience of finding, buying, and selling your new HOME on this all-in-one platform</div>
              <BeveledButton placeholder={"Learn More"} width={sizes.BUTTON_WIDTH_MEDIUM} className="button-black" onClick={learnMore}/>
            </div>

          </div>
        </div>
      </section>
      <section className="welcome-buyer">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", paddingTop: 80 }}>
          <div>
            <div style={{ fontSize: sizes.FONT_MAX, color: colors.text, textWrap: "wrap", textAlign: "center" }}>Are You A BUYER?</div>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", textAlign: "center" }}>Enjoy the convenience of FINDING and BUYING your home on one online platform.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginTop: 10 }}>
            <Buyer_Options image={find_home_buyer} placeholder="Find Your HOME" />
            <Buyer_Options image={buy_home_buyer} placeholder="Buy Your HOME" />
            <Buyer_Options image={ar_home} placeholder="AR Staging" />
          </div>
          <BeveledButton placeholder={"Start Searching"} width={sizes.BUTTON_WIDTH_MEDIUM} />
        </div>
      </section>
      <section className="welcome-seller">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", paddingTop: 80 }}>
          <div>
            <div style={{ fontSize: sizes.FONT_MAX, color: colors.text2, textWrap: "wrap", textAlign: "center" }}>Are You A SELLER?</div>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text2, textWrap: "wrap", textAlign: "center", width: 700 }}>SMARTPROP simplifies the LEASING and LISTING processes by giving your property the visibility your property deserves with just a few clicks.</div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
            <Seller_Options image={for_rent} placeholder={"Start Renting"} onClick={getStarted}/>
            <Seller_Options image={for_sale} placeholder={"Start Selling"} onClick={getStarted}/>
          </div>
        </div>
      </section>
      <section className="welcome-help-you">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", paddingTop: 80 }}>
          <div>
            <div style={{ fontSize: sizes.FONT_MAX, color: colors.text, textWrap: "wrap", textAlign: "center" }}>So, Where Shall We Start?</div>
            <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", textAlign: "center" }}></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Options image={find_home} placeholder={"Find Your Home"} />
              <Options image={buy_home} placeholder={"Own Your Home"} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Options image={for_rent} placeholder={"Rent A Home"} />
              <Options image={for_sale} placeholder={"Sell A Home"} />
            </div>
          </div>
        </div>
      </section>
      <footer style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", paddingTop: 30}}>
        <div>
          <Logo size={150}/>
          <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", textAlign: "center" }}>© SmartProp 2024. All Rights Reserved.</div>    
        </div>
        <div>
          IG LD X
        </div>
      </footer>
    </div>
  );
}

function Buyer_Options({ image, placeholder }) {
  return (
    <div style={{
      margin: 30, display: "flex", flexDirection: "column", alignItems: "center",
    }} >
      <img className="option" style={{ marginBottom: 10, height: 350 }} src={image} />
      <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", textAlign: "center" }}>{placeholder}</div>
    </div>
  )
}

function Seller_Options({ image, placeholder, onClick }) {
  return (
    <div style={{ margin: 30, display: "flex", flexDirection: "column", alignItems: "center", }}>
      <img style={{ marginBottom: 10, width: 300 }} src={image} className="option" />
      <BorderBevelButton placeholder={placeholder} className="border-white-button" width={sizes.BUTTON_WIDTH_MEDIUM} onClick={onClick}/>
    </div>
  )
}

function Options({ image, placeholder }) {
  return (
    <div style={{ margin: 30, display: "flex", flexDirection: "column", alignItems: "center", marginRight: 70, marginLeft: 70 }}>
      <img style={{ marginBottom: 10, width: 200 }} src={image} className="option" />
      <div style={{ fontSize: sizes.FONT_MID, color: colors.text, textWrap: "wrap", textAlign: "center" }}>{placeholder}</div>
    </div>
  )
}

export default Welcome;
