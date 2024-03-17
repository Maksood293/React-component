import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./styles.scss";
import { BEMHelper } from "../../../utils/bem-helper";
import { ToggleButtonExampleProps } from "../Interfaces/dtos";



const classHelper = BEMHelper("button-group");
export const GroupButton: React.FC<ToggleButtonExampleProps> = ({
  radios,
  type,
  variant = "primary",
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(radios[0].value);

  return (
    <ButtonGroup className={classHelper(`toggle-button-group ${type}`)}>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type={type}
          variant={variant}
          name="radio"
          value={radio.value}
          checked={selectedValue === radio.value}
          onChange={() => setSelectedValue(radio.value)}
          className={classHelper(
            selectedValue === radio.value ? `${variant}` : "toggle-button"
          )}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};
