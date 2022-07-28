import React, {useState} from 'react';
import {TournamentBoard} from "react-tournament-board";
import 'react-tournament-board/style.css';
import Leaf from "./LeafComponent/LeafComponent";
import style from './DrawsPage.module.css';
import {Form, FormGroup, InputGroup, Modal, ModalBody, ModalHeader, Table} from "react-bootstrap";

function DrawsPage(props){


    function handleInputChange(){

    }

    function getDrawSize(n){
        const answer = parseInt(Math.log2(n));
        if(Math.pow(2,answer) >= n){
            return(answer);
        }else{
            return(answer + 1)
        }
    }

    function assignPlayers(matches,competitors,players,size,index){
        if(size !== 1){
            const comp1 = competitors[0];
            const comp2 = competitors[1];
            return [assignPlayers(matches,comp1,players, size-1,index),assignPlayers(matches,comp2,players, size-1,index + Math.pow(2,size-2))];
        }else if(size === 1){
            if(matches[index].player_2 === null){
                return {id: matches[index].player_1,
                    player: players.filter((player) => player.id === matches[index].player_1)[0]}
            }else{
                return [{id: matches[index].player_1,
                            player: players.filter((player) => player.id === matches[index].player_1)[0] },
                    {id: matches[index].player_2,
                            player: players.filter((player) => player.id === matches[index].player_2)[0]}]
            }
        }
    }

    const players = [
        {id: 1, first_name: "Nethmi", last_name: "Jayakody" , seed: 1},
        {id: 2, first_name: "Kumuthu" , last_name: "Athukorala", seed: 3},
        {id: 3, first_name: "Poorna", last_name: "Corry", seed: 2},
        {id: 4, first_name: "Vinul", last_name: "Vinul", seed: 4},
        {id: 5, first_name: "Pasan", last_name: "Kalansuriya", seed: 5},
        {id: 6, first_name: "Harshani", last_name: "Bandara", seed: 6}
    ];

    const matches = [
        {match_id: 1, player_1: 1, player_2: null, winner_id: null, court: "supun dhananjaya" },
        {match_id: 2, player_1: 3, player_2: 4, winner_id: 4, court: "supun dhananjaya"},
        {match_id: 3, player_1: 2, player_2: null, winner_id: null, court: "supun dhananjaya" },
        {match_id: 4, player_1: 5, player_2: 6, winner_id: null, court: "supun dhananjaya" },
        {match_id: 5, player_1: 1, player_2: 4, winner_id: 1, court: "supun dhananjaya" }
    ];

    let competitors = [];
    const numOfPlayers = players.length;
    const bracketSize = getDrawSize(numOfPlayers);
    console.log(bracketSize);
    for(let i  = 0; i <= bracketSize-2 ; i++){
        competitors = [JSON.parse(JSON.stringify(competitors)),JSON.parse(JSON.stringify(competitors))]
    }

    competitors = assignPlayers(matches,competitors,players, bracketSize,0);

    const completedMatches = [];
    for(let j = 0; j < matches.length; j ++){
        if(matches[j].winner_id !== null && matches[j].player_2 !== null){
            completedMatches.push({
                result: [{id: matches[j].player_1},{id: matches[j].player_2}],
                winnerId: matches[j].winner_id
            });
        }
    }






    return (
        <div className={style['draw-div']}>
            <div className="container">

                <div className={style['header-div']}>
                    <h1>UMiSF 2022 </h1>
                    <h2>18 May - 10 August</h2>
                    <hr className={style['header-dr']}/>
                </div>

                <div className={style['match-type']}>
                    <h1 className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">MATCH SCHEDULE</h1>
                    <Form>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <FormGroup>
                                <label htmlFor="matchType">
                                    Match Type
                                </label>
                                <select
                                    id="matchType"
                                    name="matchType"
                                    placeholder="Select Match Type"
                                    required={true}
                                    value=''
                                    onChange={handleInputChange}
                                >
                                    <option>Hello</option>
                                </select>
                            </FormGroup>
                        </div>
                    </Form>
                </div>



                <div className="row">
                    <h1>$Sample_Tournament - Draw</h1>
                </div>

                <TournamentBoard
                    competitor={competitors}
                    matches={completedMatches}

                    nodeRenderer={(props) =>
                        <Leaf isLeaf={props.isLeaf} competitor={props.competitor} p={props.children}/>
                    }

                    treeLinksLayerProps={{
                        stroke: 'silver',
                        strokeWidth: 2,
                    }}

                    winnerLinksLayerProps={{
                        stroke: '#4DEA2CFF',
                        strokeWidth: 4,
                    }}

                    direction="vertical"
                    leafDistance={75}
                    leafPadding={50}
                />

            </div>
        </div>
    );
};

export default DrawsPage;