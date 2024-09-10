import React, {useState} from 'react';
import "../Styles/ComponentStyles.css"
import { colors } from '../Data/DataModels';

function Dropdown({options, placeholder, setOption}) {

    const[isOpen, setIsOpen] = useState(false);
    const[selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setOption(option.value)
    }

  return (
    <div className='dropdown'>
        <div className={isOpen ? 'dropdown-header-active' : 'dropdown-header'} onClick={toggleDropdown} style={{color: selectedOption ? colors.text : colors.text3}}>
            {selectedOption ? selectedOption.label : placeholder}
        </div>
        <div>
            {
                isOpen && (
                    <div className='dropdown-list' style={{color: colors.text3}}>
                        {
                            options.map(option => (
                                <div
                                    key = {option.value}
                                    className='dropdown-item'
                                    onClick={() => handleOptionClick(option)}
                                >{option.label}</div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    </div>

  )
}

export default Dropdown