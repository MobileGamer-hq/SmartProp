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
  width = sizes.BUTTON_WIDTH_SMALL,
  height = sizes.BUTTON_HEIGHT_MEDIUM,
  padding = sizes.PADDING_MIN,
  fontSize = sizes.FONT_MIN + 1,
  margin = sizes.MARGIN_MIN,
  className = "button"
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        color: colors.text2,
        borderRadius: sizes.MIN,
        fontSize: fontSize,
        margin: margin,
        
      }}
      onClick={onClick}
    >
      {placeholder}
    </div>
  );
}

export function BorderBevelButton({
  placeholder,
  onClick,
  color = colors.primary,
  width = sizes.BUTTON_WIDTH_SMALL,
  height = sizes.BUTTON_HEIGHT_MEDIUM,
  padding = sizes.PADDING_MIN,
  fontSize = sizes.FONT_MIN + 1,
  margin = sizes.MARGIN_MIN,
  className = "border-button"
}){
  return(
    <div
      className={className}
      style={{
        width: width,
        height: height,
        borderRadius: sizes.MIN,
        fontSize: fontSize,
        margin: margin,
        
      }}
      onClick={onClick}
    >
      {placeholder}
    </div>
  )
}
