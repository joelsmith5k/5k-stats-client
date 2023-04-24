import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState, useEffect } from "react";

function PlayerDropDownButton({ items }) {
  let [index] = useState(0);

  const handleSelect = (eventKey) => {
    console.log(eventKey);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Dropdown button"
      onSelect={handleSelect}
    >
      {items.map((item) => (
        <Dropdown.Item key={index++} eventKey={index}>
          {item.Rank + ". " + item.Name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default PlayerDropDownButton;
