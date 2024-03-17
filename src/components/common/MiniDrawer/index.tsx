import React, { useState } from "react";
import "./styles.scss";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/avatar.png";
import { BEMHelper } from "../../../utils/bem-helper";
import { Body, Heading } from "..";

const classHelper = BEMHelper('mini-drawer')
const MiniDrawer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [state, setState] = useState([
    {
      id: 0,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M5.4823 2.52871C6.01366 2.17367 6.57492 1.87166 7.15798 1.62515C8.57288 1.02694 9.28033 0.727835 10.1829 1.32617C11.0855 1.92451 11.0855 2.90407 11.0855 4.86319V6.88029C11.0855 8.78203 11.0855 9.7329 11.6763 10.3237C12.2671 10.9145 13.218 10.9145 15.1197 10.9145H17.1368C19.0959 10.9145 20.0755 10.9145 20.6738 11.8171C21.2722 12.7197 20.9731 13.4271 20.3749 14.842C20.1283 15.4251 19.8263 15.9863 19.4713 16.5177C18.3631 18.1763 16.7879 19.4689 14.9451 20.2323C13.1022 20.9956 11.0743 21.1954 9.11792 20.8062C7.16153 20.4171 5.36446 19.4565 3.95398 18.046C2.5435 16.6355 1.58295 14.8385 1.19379 12.8821C0.804643 10.9257 1.00437 8.89782 1.76772 7.05494C2.53107 5.21205 3.82375 3.63692 5.4823 2.52871Z"
            fill="#8E8E8E"
            stroke="white"
            stroke-width="1.8"
          />
          <path
            d="M13.6055 1.14697C17.1495 2.05915 19.9397 4.8493 20.8519 8.39337"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      ),
      value: "Dashboard",
      active: true,
    },
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z"
            stroke="white"
            stroke-width="1.8"
          />
          <path
            d="M22 12C22 12 21.0071 12.8907 19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12 2 12"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <path
            d="M22 16C22 16 21.0071 16.8907 19.0212 17.6851L16.2127 18.8085C14.2268 19.6028 13.2339 20 12 20C10.7661 20 9.77318 19.6028 7.7873 18.8085L4.97883 17.6851C2.99294 16.8907 2 16 2 16"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      ),
      value: "Orders",
      active: false,
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
            stroke="white"
            stroke-width="1.8"
          />
          <path
            d="M8 12H16"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <path
            d="M8 8H16"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <path
            d="M8 16H13"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      ),
      value: "Report",
      active: false,
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <circle cx="9" cy="6" r="4" stroke="white" stroke-width="1.8" />
          <path
            d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
          <ellipse
            cx="9"
            cy="17"
            rx="7"
            ry="4"
            stroke="white"
            stroke-width="1.8"
          />
          <path
            d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      ),
      value: "Users",
      active: false,
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <circle cx="12" cy="12" r="3" stroke="white" stroke-width="1.8" />
          <path
            d="M13.7658 2.15224C13.3983 2 12.9324 2 12.0005 2C11.0686 2 10.6027 2 10.2351 2.15224C9.74505 2.35523 9.35571 2.74458 9.15272 3.23463C9.06005 3.45834 9.02379 3.7185 9.0096 4.09799C8.98875 4.65568 8.70274 5.17189 8.21943 5.45093C7.73612 5.72996 7.14608 5.71954 6.65268 5.45876C6.31693 5.2813 6.07349 5.18262 5.83342 5.15102C5.30753 5.08178 4.77567 5.22429 4.35485 5.5472C4.03923 5.78938 3.80626 6.1929 3.34032 6.99993C2.87438 7.80697 2.64141 8.21048 2.58948 8.60491C2.52025 9.1308 2.66276 9.66266 2.98566 10.0835C3.13305 10.2756 3.34019 10.437 3.66167 10.639C4.13429 10.936 4.43838 11.4419 4.43835 12C4.43832 12.5581 4.13424 13.0639 3.66167 13.3608C3.34013 13.5629 3.13297 13.7244 2.98557 13.9165C2.66266 14.3373 2.52015 14.8691 2.58938 15.395C2.64131 15.7894 2.87428 16.193 3.34022 17C3.80616 17.807 4.03913 18.2106 4.35475 18.4527C4.77557 18.7756 5.30743 18.9181 5.83333 18.8489C6.07338 18.8173 6.31681 18.7186 6.65253 18.5412C7.14596 18.2804 7.73605 18.27 8.21939 18.549C8.70273 18.8281 8.98874 19.3443 9.0096 19.9021C9.0238 20.2815 9.06006 20.5417 9.15272 20.7654C9.35571 21.2554 9.74505 21.6448 10.2351 21.8478C10.6027 22 11.0686 22 12.0005 22C12.9324 22 13.3983 22 13.7658 21.8478C14.2559 21.6448 14.6452 21.2554 14.8482 20.7654C14.9409 20.5417 14.9772 20.2815 14.9914 19.902C15.0122 19.3443 15.2982 18.8281 15.7815 18.549C16.2648 18.2699 16.8549 18.2804 17.3484 18.5412C17.6841 18.7186 17.9275 18.8172 18.1675 18.8488C18.6934 18.9181 19.2253 18.7756 19.6461 18.4527C19.9617 18.2105 20.1947 17.807 20.6606 16.9999C21.1266 16.1929 21.3595 15.7894 21.4115 15.395C21.4807 14.8691 21.3382 14.3372 21.0153 13.9164C20.8679 13.7243 20.6607 13.5628 20.3392 13.3608C19.8666 13.0639 19.5626 12.558 19.5626 11.9999C19.5626 11.4418 19.8667 10.9361 20.3392 10.6392C20.6608 10.4371 20.868 10.2757 21.0154 10.0835C21.3383 9.66273 21.4808 9.13087 21.4116 8.60497C21.3596 8.21055 21.1267 7.80703 20.6607 7C20.1948 6.19297 19.9618 5.78945 19.6462 5.54727C19.2254 5.22436 18.6935 5.08185 18.1676 5.15109C17.9276 5.18269 17.6841 5.28136 17.3484 5.4588C16.855 5.71959 16.2649 5.73002 15.7816 5.45096C15.2982 5.17191 15.0122 4.65566 14.9914 4.09794C14.9772 3.71848 14.9409 3.45833 14.8482 3.23463C14.6452 2.74458 14.2559 2.35523 13.7658 2.15224Z"
            stroke="white"
            stroke-width="1.8"
          />
        </svg>
      ),
      value: "Settings",
      active: false,
    },
  ]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen((prev) => !prev);
  };

  const handleActive = (index: number) => {
    const updatedState = state.map((item, idx) => ({
      ...item,
      active: idx === index,
    }));
    setState(updatedState);
  };
  return (
    <div className={classHelper('',[open ? "open" : "closed"])}>
      <div
        className={classHelper('drawer-content')}
      >
        <img src={logo} onClick={handleDrawerOpen}/>
        <div>
          {open && (
            <div onClick={handleDrawerClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_9_1549)">
                  <rect width="30" height="30" fill="#111010" />
                  <path
                    d="M22.2222 25H7.77778C7.04107 25 6.33453 24.7073 5.81359 24.1864C5.29266 23.6655 5 22.9589 5 22.2222V7.77778C5 7.04107 5.29266 6.33453 5.81359 5.81359C6.33453 5.29266 7.04107 5 7.77778 5H22.2222C22.9589 5 23.6655 5.29266 24.1864 5.81359C24.7073 6.33453 25 7.04107 25 7.77778V22.2222C25 22.9589 24.7073 23.6655 24.1864 24.1864C23.6655 24.7073 22.9589 25 22.2222 25ZM11.6667 6.11111V23.8889H22.2222C22.6643 23.8889 23.0882 23.7133 23.4007 23.4007C23.7133 23.0882 23.8889 22.6643 23.8889 22.2222V7.77778C23.8889 7.33575 23.7133 6.91183 23.4007 6.59927C23.0882 6.28671 22.6643 6.11111 22.2222 6.11111H11.6667ZM7.77778 6.11111C7.33575 6.11111 6.91183 6.28671 6.59927 6.59927C6.28671 6.91183 6.11111 7.33575 6.11111 7.77778V22.2222C6.11111 22.6643 6.28671 23.0882 6.59927 23.4007C6.91183 23.7133 7.33575 23.8889 7.77778 23.8889H10.5556V6.11111H7.77778Z"
                    fill="#18A0FB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_1549">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div
       className={classHelper('drawer-list')}
      >
        {state.map((item, index) => (
          <div
            key={index}
            className={`drawer-list__item ${item.active ? "active" : 'close'}`}
            onClick={() => handleActive(index)}
          >
            <div>{item.icon}</div>
           
              {" "}
              {open && <div> <Heading type="h4" fontWeight="medium" style={{color:'white'}}>{item.value}</Heading></div>}
            
          </div>
        ))}
      </div>
      <div className={classHelper('footer-avatar')} style={{display:'flex', position:'absolute', bottom:'0px', color:'white',gap:'20px'}}>
        <img src={avatar} width={50} height={50}/>
        {open && (
            <div >
            <Body type="body1" style={{color:'white'}}>Alphanso Mango</Body>
            <Body type="body2" style={{color:'white', opacity:'0.5'}}>PLANNER</Body>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default MiniDrawer;
