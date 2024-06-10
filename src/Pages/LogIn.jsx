/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import { BeveledButton, FlatButton } from "../Components/Buttons";
import { signIn } from "../Data/FirebaseManager";
import { sizes } from "../Data/DataModels";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <div
        style={{
          width: "60%",
        }}
      >
        LOGO
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <div>
          <div style={{
            fontSize: 20,
            marginBottom: sizes.MARGIN_MID
          }}>
            Continue Where You Stopped!
          </div>
          <TextInput text="Email" border={true} message={"example@email.com"} value={email} onTextInputChange={(input) => setEmail(input)} />
          <TextInput text="Password" border={true} message={"password1234"} value={password} onTextInputChange={(input) => setPassword(input)}/>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <BeveledButton
            placeholder={"LogIn"}
            onClick={() => signIn(email, password)}
          />
          <FlatButton placeholder={"I don't have an account, Sign Up"} />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
