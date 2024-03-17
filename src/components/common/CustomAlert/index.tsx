import React from "react";
import Alert from "react-bootstrap/Alert";
import "./styles.scss"; // Import your custom styles
import { BEMHelper } from "../../../utils/bem-helper";
import { CustomAlertProps } from "../Interfaces/dtos";
const classHelper = BEMHelper("custom-alert");
import success from './../../../assets/success.svg'
import info from './../../../assets/Info.svg'
import danger from '../../../assets/danger.svg'
import warning from '../../../assets/warning.svg'


const CustomAlert: React.FC<CustomAlertProps> = ({
  variant,
  dismissible = false,
  onClose,
  children,
  className,
}) => {
  const conditionalSvg = (variant: string) => {
    switch (variant) {
      case "success":
        return (      
          <img src={success}/>
        );
      case "primary":
        return (      
            <img src={info} />
        );
      case "danger":
        return (       
            <img src={danger}/>
        );
      case "warning":
        return (       
           <img src={warning}/>
        );
      default:
        break;
    }
  };
  return (
    <Alert
      variant={variant}
      dismissible={dismissible}
      onClose={onClose}
      className={classHelper("", [], className)}
      style={{ position: "relative" }}
    >
      <div>{conditionalSvg(variant)}</div>
      <div
        style={{
          position: "absolute",
          top: "26px",
          width: "100%",
          textAlign: "center",
          fontWeight:'600',
          fontSize:'18px'
          
        }}
      >
        {children}
      </div>
    </Alert>
  );
};

export default CustomAlert;
