/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Styles/LogInAndSignUp.css"
import TextInput from "../Components/TextInput";
import { BeveledButton, FlatButton } from "../Components/Buttons";
import { signIn } from "../Data/FirebaseManager";
import { colors, sizes } from '../Data/DataModels';
import { useNavigate } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='container'>
      <div className='floating-container' style={{ borderRadius: 20 }}>
        <div style={{fontSize: sizes.FONT_MAX, color: colors.primary, textAlign: "center", width: "80%"}}>Continue Where You Stopped</div>
        <div style={{width: "80%"}}>
          <TextInput text="Email" border={true} message={"example@email.com"} value={email} onTextInputChange={(input) => setEmail(input)} />
          <TextInput text="Password" border={true} message={"password1234"} value={password} onTextInputChange={(input) => setPassword(input)}/>
        </div>
        <div>
          <BeveledButton placeholder={"Log In"} width={sizes.BUTTON_WIDTH_MEDIUM} onClick={() => {
            signIn(email, password);
            navigate("/")
          }}/>
          <FlatButton placeholder={"Don't Have an Account, Sign Up"} onClick={() => navigate("/sign-up")}/>
        </div>
      </div>
    </div>
  )
}

export default LogIn;
