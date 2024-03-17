import React from "react";
import "./styles.scss"; // Import SCSS file for styling
import { BEMHelper } from "../../../utils/bem-helper";
import { IconButtonProps } from "../Interfaces/dtos";



const IconButton: React.FC<IconButtonProps> = ({
  icon,
  enabled,
  onClick,
  className,
}) => {
  const handleClick = () => {
    if (enabled && onClick) {
      onClick();
    }
  };
  const classHelper = BEMHelper("icon-button")(
    "",
    [enabled ? "enabled" : "disabled"],
    `${className ?? ""}`
  );

  return (
    <button className={classHelper} onClick={handleClick}>
      <span className="icon">{icon}</span>
    </button>
  );
};

export default IconButton;
