import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const NavLinkTr = [
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

const Nav = ({ containerStyle, linkStyle, currentLanguage }) => {
  return (
    <nav className={`${containerStyle}`}>
      {currentLanguage && currentLanguage === "tr"
        ? NavLinkTr.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              offset={link.offset}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              className={`${linkStyle}`}
            >
              {link.name}
            </Link>
          ))
        : NavLinkEn.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              offset={link.offset}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              className={`${linkStyle}`}
            >
              {link.name}
            </Link>
          ))}
    </nav>
  );
};

export default Nav;
