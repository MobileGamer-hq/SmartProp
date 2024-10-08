import React from "react";
import { colors, sizes } from "../Data/DataModels";
import "../Styles/ButtonStyles.css";

export function FlatButton({ placeholder, onClick, color, size = sizes.BUTTON_FONT_SMALL, className = "flat-button", width = sizes.BUTTON_WIDTH_SMALL }) {
  return (
    <div
      className={className}
      style={{
        padding: sizes.PADDING_MIN,
        fontSize: size,
        width: width
      }}
      onClick={onClick}
    >
      {placeholder}
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
  fontSize = sizes.BUTTON_FONT_MEDIUM,
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
  fontSize = sizes.BUTTON_FONT_MEDIUM,
  margin = sizes.MARGIN_MIN,
  className = "border-button",
  align
}) {
  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        borderRadius: sizes.MIN,
        fontSize: fontSize,
        margin: margin,
        alignSelf: align

      }}
      onClick={onClick}
    >
      {placeholder}
    </div>
  )
}
