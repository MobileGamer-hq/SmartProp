import React, { useEffect, useState } from 'react'
import {sizes, colors} from "../Data/DataModels";
import "../Styles/ComponentStyles.css"

function SearchBar({
    color = {
        border: 'grey',
        bg: 'transparent',
        text: colors.text
    },
    width = '100%',
    size = sizes.BUTTON_FONT_LARGE - 3,
    type = 'text',
    text = 'input....',
    margin = sizes.MARGIN_MAX,
    onSearchBarChange,
    onKeyDown = () => { },
    align = 'center',
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

        <div className={active && border ? "search-bar-active" : 'search-bar'}
            style={{
                width: width,
                height: sizes.BUTTON_HEIGHT_MEDIUM,
                fontSize: size,
                backgroundColor: colors.secondary,
                display: 'flex',
                flexDirection: 'column',
                alignItems: align,
                justifyContent: 'center',
                padding: sizes.PADDING_MID,
                borderRadius: sizes.MID,
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
                    onSearchBarChange(e.target.value);
                }}
                onKeyDown={onKeyDown}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    );
}

export default SearchBar;