import React, { useState } from 'react'
import "../Styles/LogInAndSignUp.css"
import { BeveledButton, FlatButton } from '../Components/Buttons';
import { colors, dropdown_options, sizes } from '../Data/DataModels';
import TextInput from '../Components/TextInput';
import Dropdown from '../Components/Dropdown';
import { signUp } from '../Data/FirebaseManager';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate() 
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  console.log(role)

  return (
    <div className='container'>
      <div className='floating-container' style={{ borderRadius: 20 }}>
        <div style={{ fontSize: sizes.FONT_MAX, color: colors.primary, textAlign: "center", width: "80%" }}>Sign Up</div>
        <div style={{ width: "80%" }}>
          
          <TextInput text="Full Name" border={true} message={"John Doh"} value={fullName} onTextInputChange={(input) => setFullName(input)} />
          <TextInput text="Email" border={true} message={"example@email.com"} value={email} onTextInputChange={(input) => setEmail(input)} />
          <TextInput text="Password" border={true} message={"password1234"} value={password} onTextInputChange={(input) => setPassword(input)} />
          <Dropdown options={dropdown_options.user_role} placeholder={"Role"} setOption={setRole}/>
        </div>
        <div>
          <BeveledButton placeholder={"Sign Up"} width={sizes.BUTTON_WIDTH_MEDIUM} onClick={() => {
            signUp(fullName, email, password, role)
            navigate("/")
          }}/>
          <FlatButton placeholder={"Already Have an Account, Log In"} onClick={() => navigate("/log-in")} />
        </div>
      </div>
    </div>
  )
}

function Fields({ placeholder, value, setValue }) {

}

export default SignUp;