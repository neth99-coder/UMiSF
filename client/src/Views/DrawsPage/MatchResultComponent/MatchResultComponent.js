import React from "react";
import style from './MatchResultComponent.module.css';

function MatchResult(props){

    if(1){
        return(
            <div className={style["node-div"]}>
                <table>

                    <div className={style["row-div"]}>
                        <tr>
                            <th><span className={style['name-tag']}>{"Player 1"}</span></th>
                        </tr>
                    </div>

                    <div className={style["row-div"]}>
                        <tr>
                            <th><span className={style['name-tag']}>{"Player 2"}</span></th>
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

export default MatchResult;