import React from "react";
import style from "./Css/Blog.module.css";
import resim from "/Blog_1.webp";
export default function Blog() {
  return (
    <>
      <h1 className={style.container__title}>BLOG</h1>
      <div className={style.container}>
        <div className={style.container__blog}>
          <div className={style.container__blog__card}>
            <img src={resim} alt="blog" />
            <div className={style.container__blog__card__text}>
              <p className={style.title}>Müdavim: Ahmet Ümit</p>
              <p className={style.date}>11.03.2024</p>
              <div className={style.text}>
                <p>
                  Türk Edebiyatı'nın polisiye kalemlerinden usta yazar Ahmet
                  Ümit, restoranımız hakkında kaleme aldığı düşüncelerini
                  sizlerle büyük bir kıvançla paylaşıyoruz.
                </p>
              </div>
              <div className={style.container__blog__card__text__btn}>
                <button className={style.btn}>Devamı</button>
              </div>
            </div>
          </div>
          <div className={style.container__blog__card}>
            <img src={resim} alt="blog" />
            <div className={style.container__blog__card__text}>
              <p className={style.title}>Müdavim: Ahmet Ümit</p>
              <p className={style.date}>11.03.2024</p>
              <div className={style.text}>
                <p>
                  Türk Edebiyatı'nın polisiye kalemlerinden usta yazar Ahmet
                  Ümit, restoranımız hakkında kaleme aldığı düşüncelerini
                  sizlerle büyük bir kıvançla paylaşıyoruz.
                </p>
              </div>
              <div className={style.container__blog__card__text__btn}>
                <button className={style.btn}>Devamı</button>
              </div>
            </div>
          </div>
          <div className={style.container__blog__card}>
            <img src={resim} alt="blog" />
            <div className={style.container__blog__card__text}>
              <p className={style.title}>Müdavim: Ahmet Ümit</p>
              <p className={style.date}>11.03.2024</p>
              <div className={style.text}>
                <p>
                  Türk Edebiyatı'nın polisiye kalemlerinden usta yazar Ahmet
                  Ümit, restoranımız hakkında kaleme aldığı düşüncelerini
                  sizlerle büyük bir kıvançla paylaşıyoruz.
                </p>
              </div>
              <div className={style.container__blog__card__text__btn}>
                <button className={style.btn}>Devamı</button>
              </div>
            </div>
          </div>
          <div className={style.container__blog__card}>
            <img src={resim} alt="blog" />
            <div className={style.container__blog__card__text}>
              <p className={style.title}>Müdavim: Ahmet Ümit</p>
              <p className={style.date}>11.03.2024</p>
              <div className={style.text}>
                <p>
                  Türk Edebiyatı'nın polisiye kalemlerinden usta yazar Ahmet
                  Ümit, restoranımız hakkında kaleme aldığı düşüncelerini
                  sizlerle büyük bir kıvançla paylaşıyoruz.
                </p>
              </div>
              <div className={style.container__blog__card__text__btn}>
                <button className={style.btn}>Devamı</button>
              </div>
            </div>
          </div>
          <div className={style.container__blog__card}>
            <img src={resim} alt="blog" />
            <div className={style.container__blog__card__text}>
              <p className={style.title}>Müdavim: Ahmet Ümit</p>
              <p className={style.date}>11.03.2024</p>
              <div className={style.text}>
                <p>
                  Türk Edebiyatı'nın polisiye kalemlerinden usta yazar Ahmet
                  Ümit, restoranımız hakkında kaleme aldığı düşüncelerini
                  sizlerle büyük bir kıvançla paylaşıyoruz.
                </p>
              </div>
              <div className={style.container__blog__card__text__btn}>
                <button className={style.btn}>Devamı</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
