import React from "react";
//import FinishedMatchCard from './FinishedMatchCard';
import ResultRow from "./ResultRow";
import Styles from "./MatchResults.module.css";
import player1 from "./temp_img/LeeChongWei.jpg";
import player2 from "./temp_img/lin_dan.webp";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const MatchResultsPage = () => {
  const [matchFilter, setMatchFilter] = useState("Select Filter");
  const [finishedMatches, setFinishedMatches] = useState([
    {
      match_id: "123456",
      age_group: "Open",
      type: "Mens' single",
      time: "10:00 AM",
      date: "2022-07-15",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "Open",
      type: "Mens' single",
      time: "10:00 AM",
      date: "2022-07-15",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "Open",
      type: "Mens' single",
      time: "10:00 AM",
      date: "2022-07-15",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "Open",
      type: "Mens' single",
      time: "10:00 AM",
      date: "2022-07-15",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "Open",
      type: "Mens' single",
      time: "10:00 AM",
      date: "2022-07-15",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "Open",
      type: "Mens' single",
      time: "10:00 AM",
      date: "2022-07-15",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
  ]);

  function handleFilter() {}

  return (
    <div className={`${Styles["body"]}`}>
      <div className="row">
        <div
          className={`${Styles["match-result-table"]} col-9 border border-3 border-top border-light`}
        >
          <div className={`${Styles["header"]} row`}>
            <div>
              <h3>Match results</h3>
            </div>
            <div className={`${Styles["dopdown-container"]} `}>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <span>{matchFilter}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={`${Styles["dopdown-menu"]} `}>
                  <Dropdown.Item onClick={handleFilter} name="All" id="0">
                    All
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter} name="All" id="1">
                    Date
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div>
            {finishedMatches?.map((match, index) => {
              return <ResultRow match={match} key={index} />;
            })}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default MatchResultsPage;
