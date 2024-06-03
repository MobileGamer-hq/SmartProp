import React from 'react';

export function FlatButton({text, color}) {
  return (
    <div style={{
        backgroundColor: color,
        color: "red",
        padding: 50
    }}>{text}</div>
  )
}

export function BeveledButtons ({text, color}) {
  return (
    <div style={{
        backgroundColor: color,
        color: "red",
        padding: 50
    }}>{text}</div>
  )
}
