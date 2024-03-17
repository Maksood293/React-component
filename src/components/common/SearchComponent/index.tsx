import React, { useState } from "react";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import "./styles.scss";
import { SearchComponentProps } from "../Interfaces/dtos";



const SearchComponent: React.FC<SearchComponentProps> = ({
  options,
  onSearch,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchQuery, selectedOption);
  };

  return (
    <InputGroup className="mb-3">
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Select Option
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item
              key={option.value}
              onClick={() => setSelectedOption(option.value)}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Form.Control
        type="text"
        // placeholder="Search anything"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <InputGroup.Text onClick={handleSearch} style={{ cursor: "pointer" }}>
        <i
          className="fas fa-search"
          style={{ fontSize: "24px", opacity: "0.5" }}
        ></i>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default SearchComponent;
