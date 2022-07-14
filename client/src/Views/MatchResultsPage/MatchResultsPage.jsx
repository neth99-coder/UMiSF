import React from 'react';
import MatchCard from './MatchCard';
import Styles from "./MatchResults.module.css";


const MatchResultsPage = () => {
    return (
        <div className={`${Styles['body']}`}>
           <MatchCard/>
        </div>
    );
};

export default MatchResultsPage;