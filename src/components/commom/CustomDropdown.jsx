import React from "react";
import { Dropdown } from "flowbite-react";

export default function CustomDropdown({ label, icon }) {
  const dropdownStyle = {
    backgroundColor: "transparent", // No background color
    color: "inherit", // Inherit text color from the parent
    borderRadius: 0, // No border radius
    border: "1px solid currentColor",
  };

  const iconStyle = {
    marginRight: "8px", // Adjust spacing between icon and label
  };
  const options = ["Dashboard", "Settings", "Earnings", "Sign out"];
  return (
    <Dropdown label={label} style={dropdownStyle} dismissOnClick={false}>
      {icon && <i className={`icon-${icon}`} style={iconStyle}></i>}
      {options.map((item) => {
        return <Dropdown.Item>{item}</Dropdown.Item>;
      })}
    </Dropdown>
  );
}
