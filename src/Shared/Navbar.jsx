import Nav from "../Components/Nav";
import NavMobile from "../Components/NavMobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./SharedCss/Navbar.module.css";
import tr from "/tr.svg";
import en from "/en.svg";
export default function Navbar() {
  const [active, setActive] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };
  let language = localStorage.getItem("i18nextLng");
  console.log("🚀 ~ Navbar ~ language:", language);
  return (
    <>
      <div
        className={` ${active ? `${style.container}` : `${style.container}`} `}
      >
        <div className={style.navbarContainer}>
          <div className={style.logo}>
            <a href="/" className={style.logoLink}>
              <img src="/Logo.png" alt="letira" />
            </a>
          </div>
          <div className={style.navbar}>
            <Nav
              containerStyle={style.containerNav}
              linkStyle={style.linkStyle}
            />
          </div>
          <div className={style.icons}>
            <a href="/">
              <i className="fa-brands fa-facebook" id={style.facebook}></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter" id={style.twitter}></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram" id={style.instagram}></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-linkedin" id={style.linkedin}></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-youtube" id={style.youtube}></i>
            </a>
            <div className={style.icons__span}>
              <NavMobile containerStyle={style.containerNav} />
            </div>
            <div className={style.language}>
              <select
                id="language"
                name="language"
                value={language || "tr"}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={style.languageSelect}
              >
                <option value="tr" defaultValue={true}>
                  TR
                </option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
