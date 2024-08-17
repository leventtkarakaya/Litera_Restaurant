import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { RiHomeFill, RiMenuLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import style from "./Css/NavMobile.module.css";
import { useTranslation } from "react-i18next";
const NavLinkMobile = [
  {
    id: 1,
    name: "ANA SAYFA",
    path: "home",
    offset: -50,
  },
  {
    id: 2,
    name: "HAKKIMIZDA",
    path: "about",
    offset: -50,
  },
  {
    id: 3,
    name: "BLOG",
    path: "blog",
    offset: -50,
  },
  {
    id: 4,
    name: "GALERİ",
    path: "gallery",
    offset: -50,
  },
  {
    id: 5,
    name: "İLETİŞİM",
    path: "contact",
    offset: -50,
  },
];
const NavLinkEn = [
  {
    id: 1,
    name: "HOME",
    path: "home",
    offset: -50,
  },
  {
    id: 2,
    name: "ABOUT",
    path: "about",
    offset: -50,
  },

  {
    id: 3,
    name: "BLOG",
    path: "blog",
    offset: -50,
  },

  {
    id: 4,
    name: "GALLERY",
    path: "gallery",
    offset: -50,
  },

  {
    id: 5,
    name: "CONTACT",
    path: "contact",
    offset: -50,
  },
];

export default function NavMobile({ containerStyle, linkStyle }) {
  const [active, setActive] = useState(false);
  const [currentLanguages, setCurrentLanguages] = useState("tr");
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (newLang) => {
    console.log("🚀 ~ newLang:", newLang);
    setCurrentLanguages(newLang);
    i18n.changeLanguage(newLang);
  };
  return (
    <>
      <div className={`${containerStyle}`}>
        <div>
          <RiMenuLine
            className={style.menuIcon}
            onClick={() => setActive(!active) && console.log(active)}
          />
        </div>
        <aside
          className={`${
            active ? `${style.aside__true}` : `${style.aside__false} `
          } ${style.aside}`}
        >
          <div className={style.aside__container__times}>
            <FaTimes
              className={style.menuIconTimes}
              onClick={() => setActive(!active) && console.log(active)}
            />
          </div>
          <img
            src="/public/logo.png"
            alt=""
            width={100}
            height={100}
            className={style.aside__logo}
          />
          <div className={style.aside__container}>
            {currentLanguages && currentLanguages === "tr"
              ? NavLinkMobile.map((links, index) => {
                  return (
                    <LinkScroll
                      key={index}
                      to={links.path}
                      spy={true}
                      smooth={true}
                      offset={links.offset}
                      duration={500}
                      className={`${linkStyle}`}
                    >
                      {links.name}
                    </LinkScroll>
                  );
                })
              : NavLinkEn.map((links, index) => {
                  return (
                    <LinkScroll
                      key={index}
                      to={links.path}
                      spy={true}
                      smooth={true}
                      offset={links.offset}
                      duration={500}
                      className={`${linkStyle}`}
                    >
                      {links.name}
                    </LinkScroll>
                  );
                })}
          </div>
          <select
            id="language"
            name="language"
            value={currentLanguages}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className={style.selectLanguage}
          >
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
        </aside>
      </div>
    </>
  );
}
