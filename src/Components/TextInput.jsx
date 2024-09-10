import React, { useEffect, useState } from 'react'
import {sizes, colors} from "../Data/DataModels";
import "../Styles/ComponentStyles.css"

function TextInput({
    color = {
        border: 'grey',
        bg: 'transparent',
        text: colors.text
    },
    width = '100%',
    size = sizes.BUTTON_FONT_MEDIUM - 1,
    type = 'text',
    text = 'input....',
    margin = sizes.MARGIN_MAX,
    onTextInputChange,
    onKeyDown = () => { },
    align = 'flex-start',
    value = '',
    wrap = false,
    border = false,
    message
}) {

    const [active, setActive] = useState(false)

    const handleInputFocus = () => {
        setActive(true)
    }

    const handleInputBlur = () => {
        setActive(false)
    }

    return (

        <div className={active && border ? "textInput-active" : 'textInput'}
            style={{
                width: width,
                fontSize: size,
                backgroundColor: color.bg,
                display: 'flex',
                flexDirection: 'column',
                alignItems: align,
                justifyContent: 'center',
                marginBottom: margin,
            }}
        >
            <input
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: size,
                    color: color.text,
                    textAlign: align, // Center the text inside the input
                    whiteSpace: 'pre-wrap',
                    flexWrap: 'wrap',

                }}
                type={type}
                placeholder={text}
                value={value}
                onChange={(e) => {
                    onTextInputChange(e.target.value);
                }}
                onKeyDown={onKeyDown}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            {
                active ? <div style={{
                    fontSize: 10,
                    color: "grey",
                    alignSelf: "flex-end"
                }}>{message}</div> : null
            }
        </div>
    );
}

export default TextInput;