import React from "react";
import style from "./Css/About.module.css";
import Image from "/ContentAreaImage.webp";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <h1 className={style.container__title} id="about">
        {currentLanguage === "en"
          ? `${t("AboutEn.title")}`
          : `${t("AboutTr.title")}`}
      </h1>
      <div className={style.container__about}>
        <div className={style.container__about__grid}>
          <div className={style.container__about__grid__image}>
            <img src={Image} alt="" />
          </div>
          <div className={style.container__about__grid__text}>
            <h2>
              {currentLanguage === "en"
                ? `${t("AboutEn.title1")}`
                : `${t("AboutTr.title1")}`}
            </h2>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p1")}`
                : `${t("AboutTr.p1")}`}
            </p>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p2")}`
                : `${t("AboutTr.p2")}`}
            </p>
            <h2>
              {currentLanguage === "en"
                ? `${t("AboutEn.title2")}`
                : `${t("AboutTr.title2")}`}
            </h2>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p3")}`
                : `${t("AboutTr.p3")}`}
            </p>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p4")}`
                : `${t("AboutTr.p4")}`}
            </p>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p5")}`
                : `${t("AboutTr.p5")}`}
            </p>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.title3")}`
                : `${t("AboutTr.title3")}`}
            </p>
            <h2>
              {currentLanguage === "en"
                ? `${t("AboutEn.title4")}`
                : `${t("AboutTr.title4")}`}
            </h2>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p6")}`
                : `${t("AboutTr.p6")}`}
            </p>
            <p>
              {currentLanguage === "en"
                ? `${t("AboutEn.p7")}`
                : `${t("AboutTr.p7")}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
