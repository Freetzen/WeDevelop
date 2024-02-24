import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { TfiWorld } from "react-icons/tfi";
import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import LoginButton from "../loginButton/LoginButton";
import { FiMenu } from 'react-icons/fi';



const NavBar = () => {
  const isMobile = window.innerWidth < 680;
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };
  const { user } = useAuth0();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleFocusChange = (event) => {
      if (
        event.target !== document.querySelector(".dropdown-content") &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("focus", handleFocusChange);

    return () => {
      window.removeEventListener("focus", handleFocusChange);
    };
  }, [isDropdownOpen]);

  
  const handleShowMenu = () => {
    const menu = document.querySelector(`.${style.menu}`);
    if(menu.style.left === "-800px") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-800px";
    }
  }

  const ocultarMenu = () => {
    const menu = document.querySelector(`.${style.menu}`);
    menu.style.left = "-800px";
  }

  return (
    <div className={style.NavBarContainer}>
      <Link to="/" className={style.Link}>
        <div className={style.logo}>
          <img src="./images/logo-nav.png" />
        </div>
      </Link>

      <div className={style.menu} onClick={ocultarMenu}>
        <nav>
            <ul>
                  <li>
                    <Link to="/">{t("NavBar.Home")}</Link>
                  </li>
                  <li>
                    <Link to="/quote">{t("NavBar.Quote")}</Link>
                  </li>
                  <li>
                    <Link to="/projects">{t("NavBar.Projects")}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{t("NavBar.ContactUs")}</Link>
                  </li>
                  <li
                    className={style.dropdown}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span>
                      <TfiWorld />
                    </span>
                    {isDropdownOpen && (
                      <ul className={style.dropdownContent}>
                        <li>
                        <button onClick={() => handleChangeLanguage("es")}>🏳️‍🌈 Español</button>          
                          </li>
                        <li>
                        <button onClick={() => handleChangeLanguage("en")}>🏳️‍🌈 English</button>    
                        </li>
                      </ul>
                    )}
                  </li>
            </ul>
          </nav>
        <div className={style.login}>
             <LoginButton />
        </div>     
      </div>
      {
        isMobile && <div className={style.hamburgContainer}><button onClick={handleShowMenu}><FiMenu /></button></div>
      }
    </div>
  );
};

export default NavBar;
