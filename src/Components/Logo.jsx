import React from 'react'
import logo from "../logo.svg"
import "../Styles/ComponentStyles.css"

function Logo({size}) {
  return (
    <img className = "logo" src={logo} style={{
        height: size,
      }}/>
  )
}

export default Logo