import React, { useState } from 'react'
import "../Styles/LogInAndSignUp.css"
import { BeveledButton, FlatButton } from '../Components/Buttons';
import { colors, sizes } from '../Data/DataModels';
import TextInput from '../Components/TextInput';

function SignUp() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='container'>
      <div className='floating-container' style={{ borderRadius: 20 }}>
        <div style={{fontSize: sizes.FONT_MAX, color: colors.primary, textAlign: "center", width: "80%"}}>Sign Up</div>
        <div style={{width: "80%"}}>
        <TextInput text="Full Name" border={true} message={"Jogn Doh"} value={fullName} onTextInputChange={(input) => setFullName(input)} />
          <TextInput text="Email" border={true} message={"example@email.com"} value={email} onTextInputChange={(input) => setEmail(input)} />
          <TextInput text="Password" border={true} message={"password1234"} value={password} onTextInputChange={(input) => setPassword(input)}/>
        </div>
        <div>
          <BeveledButton placeholder={"Sign Up"} width={sizes.BUTTON_WIDTH_MEDIUM} />
          <FlatButton placeholder={"Already Have an Account, Log In"} />
        </div>
      </div>
    </div>
  )
}

function Fields({ placeholder, value, setValue }) {

}

export default SignUp;