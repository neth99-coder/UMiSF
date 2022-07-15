import React from "react";
import {Table} from "react-bootstrap";
import style from './LeafComponent.module.css';

function Leaf(props){

    if(props.isLeaf){
        return(
            <div className={style["node-div"]}>
                <table>

                    <div className={style["row-div"]}>
                        <tr>
                            <th><span className={style['name-tag']}>{props.competitor.player.first_name}</span></th>
                        </tr>
                    </div>

                    <div className={style["row-div"]}>
                        <tr>
                            <th><span className={style['name-tag']}>{props.competitor.player.last_name}</span></th>
                        </tr>
                    </div>

                </table>
            </div>


        )

    }else{
        return(
            <></>
            )

    }
}

export default Leaf;