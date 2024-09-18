import React, { useState } from "react";
import { colors } from "../Data/DataModels";

const SelectInput = ({ options, placeholder, onClick, width = "100%" }) => {
  const [inputValue, setInputValue] = useState(""); // Stores the current input
  const [filteredOptions, setFilteredOptions] = useState(options); // Filtered options based on input
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Controls dropdown visibility

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter options based on input value
    const filtered = options.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    
    // Show dropdown if there's input and matching options
    setDropdownOpen(value !== "" && filtered.length > 0);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option); // Set input value to selected option
    setDropdownOpen(false); // Close the dropdown
    onClick(option); // Pass selected option to parent component
    setInputValue("")
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (filteredOptions.length > 0) {
        setInputValue(filteredOptions[0]); // Autocomplete with first filtered option
      }
      setDropdownOpen(false); // Close the dropdown after selection
    }
  };

  return (
    <div style={{ width: width, margin: "auto", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #fff",
          borderRadius: "20px",
          backgroundColor: 'transparent',

          color: "#fff",
        }}
      />
      
      {/* Dropdown list */}
      {isDropdownOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 10,
            // border: "1px solid #ccc",
            borderRadius: "4px",
            position: "relative",
            width: "100%",
            maxHeight: 200,
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 1000,

          }}
        >
          {filteredOptions.map((option, index) => (
            <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{
              padding: "8px",
              cursor: "pointer",
            //   background: index % 2 === 0 ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)", // Semi-transparent background
              backdropFilter: "blur(10px)", // Glass effect
              borderRadius: "10px", // Optional: rounded corners
            //   border: "1px solid rgba(255, 255, 255, 0.2)", // Optional: subtle border to enhance the glass effect
              marginBottom: "5px", // Space between items
            }}
          >
            {option}
          </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
