import React, { useState, useEffect } from "react";
import "./styles.scss";
import { BEMHelper } from "../../../utils/bem-helper";
import { ITabsProps } from "../Interfaces/dtos";


export const Tabs: React.FC<ITabsProps> = ({
  data,
  onChange,
  parentActiveTab = 0,
  variant = "primary",
  border = false,
  scrollbar = false,
}) => {
  const classHelper = BEMHelper(`tabs-${variant}`);
  const [activeTab, _setActiveTab] = useState(parentActiveTab);
  const activeTabRef = React.useRef(activeTab);
  const setActiveTab = (index: number) => {
    activeTabRef.current = index;
    _setActiveTab(index);
  };

  useEffect(() => {
    if (onChange) {
      onChange(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    if (parentActiveTab !== activeTab) {
      setActiveTab(parentActiveTab);
    }
  }, [parentActiveTab]);

  const iconHeight = `height-${
    data.some((e) => e.icon) ? "with" : "without"
  }-icon`;
  const borderModifier = border ? "border" : null;
  const scrollbarModifier = scrollbar ? "scrollbar" : null;

  return (
    <div className={classHelper("", [borderModifier])}>
      <ul className={classHelper("list", [iconHeight, scrollbarModifier])}>
        {data.map((tab, index) => {
          return (
            <li
              onClick={() => {
                if (!tab.disabled) {
                  setActiveTab(index);
                }
              }}
              key={`${tab.label}-${index}`}
              className={classHelper("pane", [
                index === activeTab ? "active" : "",
                tab.disabled ? "disabled" : "",
              ])}
            >
              {tab?.icon && (
                <>
                  <i className={`fal ${tab.icon}`}></i>&nbsp;&nbsp;
                </>
              )}
              {tab.label}
            </li>
          );
        })}
      </ul>
      <div className={classHelper("content")}>{data[activeTab].content}</div>
    </div>
  );
};
