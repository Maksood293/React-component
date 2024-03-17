import React, { useEffect, useRef, useState } from "react";
import "./styles.scss"; // Import SCSS file for styling
import { BEMHelper } from "../../../utils/bem-helper";

interface DropdownProps {
  options: string[]; // List of options for the dropdown
}
const classHelper = BEMHelper('dropdown')
export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={classHelper()} ref={dropdownRef}>
      <div
        className={classHelper('dropdown-toggle', [isOpen ? "open" : ""])}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select an option"}
      </div>
      {isOpen && (
        <ul className={classHelper('dropdown-list')}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={classHelper(option === selectedOption ? "dropdown-list__slected" : "")}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
