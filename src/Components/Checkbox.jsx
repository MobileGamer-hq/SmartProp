import React, { useState } from "react";
import "../Styles/ComponentStyles.css"; // Importing the CSS file

const Checkbox = ({ title, defaultChecked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    const value = !isChecked;
    setIsChecked(value);
    // if (onChange) {
    //   onChange(value);  // Pass the value to parent if needed
    // }
    onChange(value)
  };

  return (
    <div className="checkbox-container">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
      <span className="checkbox-title">{title}</span>
    </div>
  );
};

export default Checkbox;
