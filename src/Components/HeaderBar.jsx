import React from 'react'
import "../Styles/ComponentStyles.css"
import { sizes } from '../Data/DataModels'
import Logo from './Logo'
import { BeveledButton, BorderBevelButton } from './Buttons'


function HeaderBar() {
  return (
    <div className='header-bar' style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: sizes.HEADER_BAR

    }}>
      <Logo size={sizes.HEADER_BAR}/>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <BorderBevelButton placeholder={"Log In"}/>
        <BeveledButton placeholder={"Get Started"}/>
      </div>
    </div>
  )
}

export default HeaderBar