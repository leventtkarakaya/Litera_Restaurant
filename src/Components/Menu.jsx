import React from "react";
import style from "./Css/Menu.module.css";
import { useTranslation } from "react-i18next";
export default function Menu() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");

  return (
    <>
      <h1 className={style.container__title}>
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
            <img src="/public/Resim1.jpg" alt="Carte des menus" />
          </a>
          <a
            href="https://www.literarestaurant.com/images/65db0f15022da.pdf"
            target="_blank"
          >
            <img src="/public/Resim2.jpg" alt="İçecekler" />
          </a>
          <a
            href="https://www.literarestaurant.com/images/65db0f2f439b7.pdf"
            target="_blank"
          >
            <img src="/public/Resim3.jpg" alt="Fikse Menü" />
          </a>
          <a
            href="https://www.literarestaurant.com/images/65db0efb11dd1.pdf"
            target="_blank"
          >
            <img src="/public/Resim4.jpg" alt="Davet Menü" />
          </a>
        </div>
      </div>
    </>
  );
}
