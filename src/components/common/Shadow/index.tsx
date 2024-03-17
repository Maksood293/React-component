import React from "react";
import { BEMHelper } from "../../../utils/bem-helper";
import './styles.scss'
import { IShadowProps } from "../Interfaces/dtos";



export const Shadow: React.FC<IShadowProps> = ({
  children,
  type,
  className,
}) => {
  const classHelper = BEMHelper("shadow")("", [type], `${className ?? ""}`);
  return <div className={classHelper}>{children}</div>;
};

