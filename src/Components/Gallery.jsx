import React, { useState } from "react";
import style from "./Css/Gallery.module.css";
import Galler1 from "/Gallery-1.png";
import Galler2 from "/Gallery-2.png";
import Galler3 from "/Gallery-3.png";
import Galler4 from "/Gallery-4.png";
import Galler5 from "/Gallery-5.png";
import Galler6 from "/Gallery-6.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  const images = [
    {
      original: Galler1, // Galler1 değişkenini kullanın
      originalAlt: "Galler1",
    },
    {
      original: Galler2, // Galler2 değişkenini kullanın
      originalAlt: "Galler2",
    },
    {
      original: Galler3, // Galler3 değişkenini kullanın
      originalAlt: "Galler3",
    },
    {
      original: Galler4, // Galler4 değişkenini kullanın
      originalAlt: "Galler4",
    },
    {
      original: Galler5, // Galler5 değişkenini kullanın
      originalAlt: "Galler5",
    },
    {
      original: Galler6, // Galler6 değişkenini kullanın
      originalAlt: "Galler6",
    },
  ];
  return (
    <>
      <h1>GALLERY</h1>
      <div className={style.container}>
        <div className={style.gallery}>
          <ImageGallery
            items={images}
            showBullets={true}
            useBrowserFullscreen={true}
            showThumbnails={false}
            disableThumbnailSwipe={true}
            autoPlay={true}
          />
        </div>
      </div>
    </>
  );
}
