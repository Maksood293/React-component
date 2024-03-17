import { Button } from "react-bootstrap";
import { BEMHelper } from "../../../utils/bem-helper";
import "./styles.scss";
import { IButtonProps } from "../Interfaces/dtos";



export const CustomButton: React.FC<IButtonProps> = ({
  size = "large",
  className,
  children,
  values,
  disabled,
  onClick,
  buttonType='button',
  ...rest
}) => {
  const classHelper = BEMHelper(buttonType)(
    "",
    [size],
    `${className ?? ""}`
  );
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };
  return (
    <Button
      disabled={disabled}
      {...rest}
      bsPrefix={classHelper}
      onClick={clickHandler}
    >
      {children}
    </Button>
  );
};
