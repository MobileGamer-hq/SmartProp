import React from "react";
import { colors, sizes } from "../Data/DataModels";
import "../Styles/ButtonStyles.css";

export function FlatButton({ placeholder, onClick, color = colors.text3 }) {
  return (
    <div>
      <div
        className="button"
        style={{
          color: color,
          padding: sizes.PADDING_MIN,
          fontSize: sizes.FONT_MIN,
        }}
        onClick={onClick}
      >
        {placeholder}
      </div>
    </div>
  );
}

export function BeveledButton({
  placeholder,
  onClick,
  color = colors.primary,
  width = sizes.BUTTON_WIDTH,
  padding = sizes.PADDING_MIN,
  fontSize = sizes.FONT_MIN + 1,
  margin = sizes.MARGIN_MIN 
}) {
  return (
    <div
      className="button"
      style={{
        width: width,
        backgroundColor: color,
        color: colors.text2,
        padding: sizes.PADDING_MIN,
        paddingRight: sizes.PADDING_MID + 5,
        paddingLeft: sizes.PADDING_MID + 5,
        borderRadius: sizes.MID,
        fontSize: fontSize,
        margin: margin,
      }}
      onClick={onClick}
    >
      {placeholder}
    </div>
  );
}
