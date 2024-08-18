import React from "react";
import style from "./Css/Menu.module.css";
import { useTranslation } from "react-i18next";
export default function Menu() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");

  return (
    <>
      <h1 className={style.container__title} id="menu">
        {currentLanguage === "en"
          ? `${t("MenuEn.title")}`
          : `${t("MenuTr.title")}`}
      </h1>
      <div className={style.container}>
        <div className={style.container__images}>
          <a
            href="https://www.literarestaurant.com/images/65db0f41598d5.pdf"
            target="_blank"
          >
            <img src="/Resim1.jpg" alt="Carte des menus" />
          </a>
          <a
            href="https://www.literarestaurant.com/images/65db0f15022da.pdf"
            target="_blank"
          >
            <img src="/Resim2.jpg" alt="İçecekler" />
          </a>
          <a
            href="https://www.literarestaurant.com/images/65db0f2f439b7.pdf"
            target="_blank"
          >
            <img src="/Resim3.jpg" alt="Fikse Menü" />
          </a>
          <a
            href="https://www.literarestaurant.com/images/65db0efb11dd1.pdf"
            target="_blank"
          >
            <img src="/Resim4.jpg" alt="Davet Menü" />
          </a>
        </div>
      </div>
    </>
  );
}
