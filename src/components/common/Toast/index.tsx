import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BEMHelper } from "../../../utils/bem-helper";
import { ToastProps } from "../Interfaces/dtos";
import danger from '../../../assets/danger.svg'
import success from '../../../assets/success.svg'
import info from '../../../assets/Info.svg'
import warning from '../../../assets/warning.svg'


const classHelper = BEMHelper("toast");

const ToastComponent: React.FC<ToastProps> = ({
  variant,
  message,
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);



  return visible ? (
    <div className={classHelper("", [variant])}>
      <div className={classHelper("icon")}>
        {variant === "success" && (
          <span style={{ borderLeft: "8px solid #1DB949", paddingLeft: "17px", height:'100%',display:'block',borderRadius:'3px' }}>
           <img src={success} style={{marginTop:'10px'}}/>
          </span>
        )}
        {variant === "error" && (
          <span style={{ borderLeft: "8px solid #F4664D", paddingLeft: "17px", height:'100%',display:'block',borderRadius:'3px' }}>
            {" "}
           <img src={danger} style={{marginTop:'10px'}}/>
           
          </span>
        )}
        {variant === "info" && (
          <span
          style={{ borderLeft: "8px solid #18A0FB", paddingLeft: "17px", height:'100%',display:'block',borderRadius:'3px' }}
          >
          <img src={info} style={{marginTop:'10px'}}/>
          </span>
        )}
        {variant === "warning" && (
          <span
          style={{ borderLeft: "8px solid #FFC700", paddingLeft: "17px", height:'100%',display:'block',borderRadius:'3px' }}
          >
         <img src={warning} style={{marginTop:'10px'}}/>
          </span>
        )}
      </div>
      <div className={classHelper("message")}>{message}</div>
    </div>
  ) : null;
};

export default ToastComponent;
