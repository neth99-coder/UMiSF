import React from "react";
import { useLocation } from "react-router-dom";
import Styles from "./PhotosPage.module.css";
import PhotoItem from "./PhotoItem";

const PhotosPage = () => {

  let location = useLocation();
  let { obj } = location.state;

  return (
    <div className={`${Styles["body"]}`}>
      <div className={`${Styles["title"]}`}>
        <h1>{obj.title}</h1>
      </div>

      <div className={`${Styles["wrapper"]}`}>

            {obj.photos?.map((image,index)=>{
                return <PhotoItem key = {index} image={image}/>
            })}
      </div>
    </div>
  );
};

export default PhotosPage;
