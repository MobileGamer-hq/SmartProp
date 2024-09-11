import React, { useEffect, useState } from 'react'
import {sizes, colors} from "../Data/DataModels";
import "../Styles/ComponentStyles.css"
import { IoSearch } from 'react-icons/io5';
import Logo from "./Logo"

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
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between',
                padding: sizes.PADDING_MAX,
                borderRadius: sizes.MAX,
            }}
        >
            {/* <div>
                <Logo size={sizes.HEADER_BAR}/>
            </div> */}
            <input
                className='search-input'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: size,
                    color: color.text,
                    textAlign: "flex-start", // Center the text inside the input
                    whiteSpace: 'pre-wrap',
                    flexWrap: 'wrap',
                    width: "90%",
                    
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
            <IoSearch id='search-icon'/>
        </div>
    );
}

export default SearchBar;