import React from 'react'
import { colors } from '../Data/DataModels'

function Loading({message = ""}) {
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
        <div>Loading...</div>
        <div>{message}</div>
    </div>
  )
}

export default Loading

