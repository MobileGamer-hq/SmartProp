import React, {useState} from 'react';
import "../Styles/ComponentStyles.css"

function Dropdown({options, placeholder}) {

    const[isOpen, setIsOpen] = useState(false);
    const[selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

  return (
    <div className='dropdown'>
        <div className='dropdown-header' onClick={toggleDropdown}>
            {selectedOption ? selectedOption.label : placeholder}
        </div>
        <div>
            {
                isOpen && (
                    <div className='dropdown-list'>
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