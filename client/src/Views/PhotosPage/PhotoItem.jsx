import React from 'react';
import Styles from "./PhotoItem.module.css";

const PhotoItem = (props) => {
    return (
        <div className={`${Styles["photo-item"]}`}>
            <a href={props.image}>
            <img src={props.image} alt={props.image}/>
            </a>
        </div>
    );
};

export default PhotoItem;