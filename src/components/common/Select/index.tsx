import React from "react";
import { Form } from "react-bootstrap";
import './styles.scss'
import { SelectProps } from "../Interfaces/dtos";



const SelectComponent: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectComponent;
