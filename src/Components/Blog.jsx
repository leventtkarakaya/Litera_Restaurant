import React from "react";
import style from "./Css/Blog.module.css";
import resim from "/Blog_1.webp";
import { useTranslation } from "react-i18next";
const blog = [
  {
    img: resim,
    title: "Müdavim: Levent KARAKAYA",
    date: "11.03.2024",
    text: "Turk Edebiyatı'nın polisiye kalemlerinden usta yazar Levent KARAKAYA, restoranımız hakkında kaleme aldığımız düşüncelerini sizlerle büyük bir kıvançla paylasıyoruz.",
  },
  {
    img: resim,
    title: "Müdavim: Levent KARAKAYA",
    date: "11.03.2024",
    text: "Turk Edebiyatı'nın polisiye kalemlerinden usta yazar Levent KARAKAYA, restoranımız hakkında kaleme aldığımız düşüncelerini sizlerle büyük bir kıvançla paylasıyoruz.",
  },
  {
    img: resim,
    title: "Müdavim: Levent KARAKAYA",
    date: "11.03.2024",
    text: "Turk Edebiyatı'nın polisiye kalemlerinden usta yazar Levent KARAKAYA, restoranımız hakkında kaleme aldığımız düşüncelerini sizlerle büyük bir kıvançla paylasıyoruz.",
  },
  {
    img: resim,
    title: "Müdavim: Levent KARAKAYA",
    date: "11.03.2024",
    text: "Turk Edebiyatı'nın polisiye kalemlerinden usta yazar Levent KARAKAYA, restoranımız hakkında kaleme aldığımız düşüncelerini sizlerle büyük bir kıvançla paylasıyoruz.",
  },
  {
    img: resim,
    title: "Müdavim: Levent KARAKAYA",
    date: "11.03.2024",
    text: "Turk Edebiyatı'nın polisiye kalemlerinden usta yazar Levent KARAKAYA, restoranımız hakkında kaleme aldığımız düşüncelerini sizlerle büyük bir kıvançla paylasıyoruz.",
  },
  {
    img: resim,
    title: "Müdavim: Levent KARAKAYA",
    date: "11.03.2024",
    text: "Turk Edebiyatı'nın polisiye kalemlerinden usta yazar Levent KARAKAYA, restoranımız hakkında kaleme aldığımız düşüncelerini sizlerle büyük bir kıvançla paylasıyoruz.",
  },
];
export default function Blog() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <h1 className={style.container__title}>BLOG</h1>
      <div className={style.container} id="blog">
        <div className={style.container__blog}>
          {blog.map((item, index) => {
            return (
              <div className={style.container__blog__card} key={index}>
                <img src={item.img} alt="blog" key={index} />
                <div className={style.container__blog__card__text}>
                  <p className={style.title}>
                    {currentLanguage === "en"
                      ? `${t("BlogEn.title")}`
                      : `${t("BlogTr.title")}`}
                  </p>
                  <p className={style.date}>
                    {currentLanguage === "en"
                      ? `${t("BlogEn.date")}`
                      : `${t("BlogTr.date")}`}
                  </p>
                  <div className={style.text}>
                    <p>
                      {currentLanguage === "en"
                        ? `${t("BlogEn.text")}`
                        : `${t("BlogTr.text")}`}
                    </p>
                  </div>
                  <div className={style.container__blog__card__text__btn}>
                    <button className={style.btn}>
                      {currentLanguage === "en"
                        ? `${t("BlogEn.btn")}`
                        : `${t("BlogTr.btn")}`}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
