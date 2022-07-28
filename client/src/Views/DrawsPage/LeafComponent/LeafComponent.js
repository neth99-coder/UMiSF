import React, {useState} from "react";
import {Button, Table} from "react-bootstrap";
import style from './LeafComponent.module.css';
import {Modal,ModalHeader,ModalBody,ModalFooter} from "react-bootstrap";
import nethDp from "../neth.jpg"
import pDp from "../p.jpg"

function Leaf(props){

    const [isShow,setShow] = useState(false);

    const players = [
        {id: 1, first_name: "Nethmi", last_name: "Jayakody" , seed: 1},
        {id: 2, first_name: "Kumuthu" , last_name: "Athukorala", seed: 3},
        {id: 3, first_name: "Poorna", last_name: "Corry", seed: 2},
        {id: 4, first_name: "Vinul", last_name: "Vinul", seed: 4},
        {id: 5, first_name: "Pasan", last_name: "Kalansuriya", seed: 5},
        {id: 6, first_name: "Harshani", last_name: "Bandara", seed: 6}
    ];

    function toggleMatchModal(){
        console.log("Clicked")
        setShow(!isShow);
    }

    function subscribeMatch(){

    }

    function getName(p){
        try{
            let name1 = p[0].competitor.player.first_name;
            let name2 = p[1].competitor.player.first_name;
            if(name1 !== undefined && name2 !== undefined){
                return [name1,name2];
            }else{
                return ["TBA","TBA"];
            }
        }catch (e){
            return ["TBA","TBA"];
        }
    }

    if(props.isLeaf){
        return(
            <div>
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
            </div>


        )

    }else{
        const names = getName(props.p);

        return(

            <div>
                <div className={style["match-div"]} onClick={toggleMatchModal}>
                    <table className={style["match-table"]}>
                        <div className={style["row-div"]}>
                            <tr>
                                <th><span className={style['result-tag']}>{names[0]}</span></th>
                                <th><span className={style['score-tag']}>{"2"}</span></th>
                            </tr>
                        </div>

                        <div className={style["row-div"]}>
                            <tr>
                                <th><span className={style['result-tag']}>{names[1]}</span></th>
                                <th><span className={style['score-tag']}>{"1"}</span></th>
                            </tr>
                        </div>
                    </table>
                </div>

                <div>
                    <Modal show={isShow} toggle={toggleMatchModal}>
                            <ModalHeader>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className={style['center']}>
                                                <h2 className={style["modal-heading"]}>Match 04</h2>
                                            </div>
                                        </div>
                                    </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className={style['modal-body']}>
                                    <div className={style['modal-body-2']}>
                                    <div className="row">
                                        <div className="col-5">
                                            <h4 className={style["modal-heading-name"]}>Nethmi</h4>
                                        </div>
                                        <div className="col-2">
                                            <h4 className={style["modal-heading-vs"]}>vs</h4>
                                        </div>
                                        <div className="col-5">
                                            <h4 className={style["modal-heading-name"]}>Poorna</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5">
                                            <img width="100%" className={style['cropped1']} src={nethDp} />
                                        </div>
                                        <div className="col-2">
                                            <></>
                                        </div>
                                        <div className="col-5">
                                            <img width="100%" className={style['cropped1']} src={pDp} />
                                        </div>
                                    </div>

                                        <br />

                                    <div className="row">
                                        <div className="col-4">
                                            <div className={style['center-black']}>
                                                <h5>20</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={style['center-ash']}>
                                                <h5>Round 1</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={style['center-black']}>
                                                <h5>14</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <div className={style['center-black']}>
                                                <h5>12</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={style['center-ash']}>
                                                <h5>Round 2</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={style['center-black']}>
                                                <h5>20</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <div className={style['center-black']}>
                                                <h5>20</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={style['center-ash']}>
                                                <h5>Round 3</h5>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className={style['center-black']}>
                                                <h5>1</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                        <div className="row">
                                            <div className="col-12 ">
                                                <div className={style['center-ash']}>
                                                    <h5>Date: 11/09/2022</h5>
                                                </div>
                                            </div>

                                            <div className="col-12 ">
                                                <div className={style['center-ash']}>
                                                    <h5>Time: 8.00 am</h5>
                                                </div>
                                            </div>

                                            <div className="col-12 ">
                                                <div className={style['center-ash']}>
                                                    <h5>Umpire: Supun Madusanka</h5>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={subscribeMatch}>Subscribe</Button>
                                <Button color="secondary" onClick={toggleMatchModal}>Close</Button>
                            </ModalFooter>
                    </Modal>
                </div>
            </div>


            )

    }
}

export default Leaf;