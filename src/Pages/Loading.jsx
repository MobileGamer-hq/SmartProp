import React from 'react'
import { colors, sizes } from '../Data/DataModels'
import "../Styles/Loading.css"

function Loading({ message = "Loading..." }) {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.secondary
    }}>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
        <div style={{color: colors.primary, fontSize: sizes.FONT_MID}}>{message}</div>
      </div>
    </div>
  )
}

export default Loading

