import React, { useState } from 'react'
import { colors } from '../Data/DataModels'
import "../Styles/ComponentStyles.css"

function Slider({ min, max, onChange, value, width = 300}) {
    const [percentage, setPercentage] = useState(((value) / (max)) * 100)

    const handleSliderChange = (event) => {
        onChange(parseInt(event.target.value))

        setPercentage(((value) / (max)) * 100)

        event.target.style.setProperty("--value", `${percentage}%`)
    }
    return (
        <div>
            <input
                className='slider'
                type='range'
                min={min}
                max={max}
                value={value}
                onChange={handleSliderChange}
                step={"1"}
                style={{
                    width: width, 
                    appearance: 'none',
                    background: `linear-gradient(to right,
                        ${colors.primary_light} 0%,
                        ${colors.primary} ${((value) / (max)) * 100}%,
                        #fff ${((value) / (max)) * 100}%,
                        #fff 100%
                    )`                   
                }}
            />
        </div>
    )
}

export default Slider