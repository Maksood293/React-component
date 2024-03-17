import React, { useState, useEffect, useRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./styles.scss";
import { BEMHelper } from "../../../utils/bem-helper";

const classHelper = BEMHelper("range");

interface RangeProps {
  onChange: (newValue: number) => void;
}

const Range: React.FC<RangeProps> = ({ onChange }) => {
  const rangeValues: number[] = [0, 25, 50, 75, 100];
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  const handleValueChange = (value: number) => {
    onChange(value);
    setSliderValue(value);
  };

  const handleMouseDown = (event: any) => {
    setIsDragging(true);
    handleDrag(event);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag: EventListener = (event) => {
    if (!isDragging) return;
  
    const sliderContainer = sliderContainerRef.current;
  
    if (!sliderContainer) return; // Make sure the container exists
  
    const containerWidth = sliderContainer.clientWidth;
    const offsetX =
      (event as MouseEvent).clientX -
      sliderContainer.getBoundingClientRect().left;
    let newValue = Math.round((offsetX / containerWidth) * 100);
  
    // Define the minimum and maximum values for your range
    const minValue = 0;
    const maxValue = 100;
  
    // Ensure newValue stays within the range
    newValue = Math.min(maxValue, Math.max(minValue, newValue));
    setSliderValue(newValue);
    onChange(newValue);
  };
  

  // Add event listeners when dragging starts and remove them when it ends
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);
  return (
    <div className={classHelper()}>
      <div className={classHelper("container")}>
        <div
          className={classHelper("slider")}
          onMouseDown={handleMouseDown}
          ref={sliderContainerRef}
        >
          <div
            className={classHelper("slider-background")}
            style={{
              width: `${sliderValue}%`,
            }}
          />
          {rangeValues.map((value, index) => (
            <OverlayTrigger
              key={value}
              placement="bottom"
              delay={{ show: 250, hide: 800 }}
              overlay={<Tooltip>{value}</Tooltip>}
            >
              <div
                key={value}
                className={classHelper("option", [
                  sliderValue === value ? "active" : "",
                ])}
                style={{
                  left:
                    index == 4
                      ? "99.1%"
                      : `${(index / (rangeValues.length - 1)) * 100}%`,
                }}
              >
                {index > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    onClick={() => handleValueChange(value)}
                  >
                    <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
                  </svg>
                )}
              </div>
            </OverlayTrigger>
          ))}
          <div
            className={classHelper("handle")}
            style={{
              left: sliderValue === 100 ? `97.4%` : `${sliderValue - 1.6}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;
