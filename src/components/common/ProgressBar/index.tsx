import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import './styles.scss'
import { ProgressBarWithTooltipProps } from "../Interfaces/dtos";



const ProgressBarWithTooltip: React.FC<ProgressBarWithTooltipProps> = ({
  progress,
  label = `${progress}%`,
  tooltipPlacement = "top",
  tooltipDelayShow = 250,
  tooltipDelayHide = 400,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };

  const renderTooltip = (props: any) => (
    <Tooltip id="progress-tooltip" {...props}>
      {label}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      delay={{ show: tooltipDelayShow, hide: tooltipDelayHide }}
      overlay={renderTooltip}
    >
      <ProgressBar
        now={progress}
        label={label}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      />
    </OverlayTrigger>
  );
};

export default ProgressBarWithTooltip;
