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
      original: Galler1, 
      originalAlt: "Galler1",
    },
    {
      original: Galler2, 
      originalAlt: "Galler2",
    },
    {
      original: Galler3, 
      originalAlt: "Galler3",
    },
    {
      original: Galler4,
      originalAlt: "Galler4",
    },
    {
      original: Galler5,
      originalAlt: "Galler5",
    },
    {
      original: Galler6,
      originalAlt: "Galler6",
    },
  ];
  return (
    <>
      <h1>GALLERY</h1>
      <div className={style.container} id="gallery">
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
