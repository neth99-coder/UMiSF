import React from "react";
import Styles from "./MatchCard.module.css";
import player1 from "./temp_img/LeeChongWei.jpg";
import player2 from "./temp_img/lin_dan.webp";
import { Table } from "react-bootstrap";

const MatchCard = () => {

    const match = {
        match_id : "123456",
        player_1 : {player_id : "111", player_name: "Lee Chong Wei", player_dp:player1},
        player_2: {player_id : "222", player_name: "Lin Dan", player_dp:player2},
        round_1: {player_1_score: 21, player_2_score: 18},
        round_2: {player_1_score: 21, player_2_score: 15},
        round_3: {player_1_score: 0, player_2_score: 0},
        number_of_rounds : 2,
        winner_id : "111"
    }

    

  return (
    <div className={`${Styles["container"]} align-items-center`}>
    <div className={`${Styles["card"]} align-items-center`}>
      <div className={`${Styles["card-header"]} row`}>
        <div
          className={`${Styles["card-title"]} col ${Styles["dp-container"]}`}
        >
          <img
            src={match["player_1"]["player_dp"]}
            alt={match["player_1"]["player_name"]}
            className={`${Styles["dp"]} ${Styles["dp-left"]}`}
          />
        </div>
        <div
          className={`${Styles["card-title"]} ${Styles["trapezoid-left"]} col`}
        >
          <div className={`${Styles["winning"]} text-center `}>
            {" "}
            <h3 className={`${Styles["winning-rounds"]}`}> {(match["player_1"]["player_id"] === match['winner_id'] )? 2 : (match["number_of_rounds"] === 2)? 0 : 1}</h3>{" "}
          </div>
        </div>
        <div className={`${Styles["card-title"]} col`}></div>
        <div
          className={`${Styles["card-title"]} ${Styles["trapezoid-right"]} col`}
        >
          <div className={`${Styles["winning"]} text-center `}>
            {" "}
            <h3 className={`${Styles["winning-rounds"]}`}>{(match["player_2"]["player_id"] === match['winner_id'] )? 2 : (match["number_of_rounds"] === 2)? 0 : 1}</h3>{" "}
          </div>
        </div>
        <div
          className={`${Styles["card-title"]} ${Styles["dp-container"]} col`}
        >
          <img
            src={player2}
            alt="player2"
            className={`${Styles["dp"]} ${Styles["dp-right"]}`}
          />
        </div>
      </div>

      <div className={`${Styles["table-container"]} row align-items-center`}>
        <Table size="sm" className={`${Styles["table"]} text-center`}>
          <thead>
            <tr>
              <th>{match["player_1"]["player_name"]}</th>
              <th>Vs</th>
              <th>{match["player_2"]["player_name"]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{match["round_1"]["player_1_score"]}</td>
              <td>Round 1</td>
              <td>{match["round_1"]["player_2_score"]}</td>
            </tr>
            <tr>
              <td>{match["round_2"]["player_1_score"]}</td>
              <td>Round 2</td>
              <td>{match["round_2"]["player_2_score"]}</td>
            </tr>
            <tr>
              <td>{match["round_3"]["player_1_score"]}</td>
              <td>Round 3</td>
              <td>{match["round_3"]["player_2_score"]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
};

export default MatchCard;
