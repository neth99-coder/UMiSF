import React from "react";
import Styles from "./GalleryPage.module.css";
import AlbumCard from "./AlbumCard";
import { useState } from "react";
import image from './Images/TempImg/1.jpg';

const GalleryPage = () => {
  const [titles, setTitles] = useState([
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ]);

  const [photos, setPhotos] = useState([
    "./Images/TempImg/1.jpg",
    "./Images/TempImg/2.jpg",
    "./Images/TempImg/3.jpg",
    "./Images/TempImg/4.jpg",
    "./Images/TempImg/5.jpg",
    "./Images/TempImg/6.jpg",
    "./Images/TempImg/7.jpg",
    "./Images/TempImg/8.jpg",
    "./Images/TempImg/9.jpg",
    "./Images/TempImg/10.jpg",
  ]);

  return (
    <div className={`${Styles["body"]}`}>
      <div className={`${Styles["cover-img"]}`}>
        <div className={`${Styles["cover-title"]}`}>
          <h1
            style={{ color: "white", fontFamily: "Lobster" }}
            id="h1"
            className={`${Styles["typing-demo"]}`}
          >
            {" "}
            Memories ....
          </h1>
        </div>
      </div>
      <div
        className={`${Styles["bottom-para"]} align-items-center text-center`}
      >
        <p style={{ fontWeight: "bold" }}>
          LET US DIVE INTO OUR GOOD OLD DAYS!
        </p>
        <img
          src="./umisf_logo.jpg"
          alt="logo"
          style={{ height: "4%", width: "4%" }}
        />
      </div>
      <div className={`${Styles["gallery"]}`}>
        <div className={`${Styles["gallery-title"]}`}>
          <h1 style={{ Height: "10px", color: "white" }}>Gallery</h1>
        </div>

        <div className={`${Styles["gallery-content"]} `}>
          {titles?.map((title, index) => {
            return <AlbumCard key={index} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
