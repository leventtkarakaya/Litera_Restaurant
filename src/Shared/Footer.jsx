import React from "react";
import style from "./SharedCss/Footer.module.css";
import Logo from "/Logo.png";
import footerBackground from "/footerBackground.jpg";
export default function Footer() {
  return (
    <>
      <img
        src={footerBackground}
        alt=""
        className={style.background}
        id="contact"
      />
      <footer id="footer" className={style.container}>
        <img src={Logo} alt="litera" />
        <div className={style.container__nav}>
          <nav>
            <a href="#">Hakkımızda</a>
            <a href="#">Menu</a>
            <a href="#">Blog</a>
            <a href="#">İletişim</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
