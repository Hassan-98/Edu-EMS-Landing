/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Cookies from "universal-cookie";

// STYLES FILES
import cls from "./dropDown.module.scss";

const cookies = new Cookies();

const DropDown = ({ menu, locale, navTop }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isNavTop, setIsNavTop] = useState(navTop);
  const [lang] = useState(cookies.get("NEXT_LOCALE") || locale);

  useEffect(() => {
    setIsNavTop(navTop);
  }, [navTop]);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <div className={cls.dropdown}>
      {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}
      
      {
        lang === "en" ? (
          <img src="/imgs/English.webp" alt="english" onClick={handleClick} />
        ) : (
          <img src="/imgs/Arabic.svg" alt="suadi" onClick={handleClick} />
        )
      }

      <i className={`fa-solid fa-caret-down ${!isNavTop && cls.colored}`} onClick={handleClick}></i>

      <Box className={`${cls.dropdownMenu} ${openMenu ? cls.show : ""}`}>
        <ul>
          {
            menu.map((item) => (
              <li key={item.option} onClick={() => {item.method(item.methodParam);handleClose();}}>
                {item.img && <img src={item.img} alt="flag" className={cls.flag} />}
                <p>{item.option}</p>
              </li>
            ))
          }
        </ul>
      </Box>

    </div>
  );
};

export default DropDown;
