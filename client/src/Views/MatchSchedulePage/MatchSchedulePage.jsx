import React, { useState } from 'react';

const MatchSchedulePage = () => {

    const handleSubscribe = (matchID) => {
        console.log("FFFF", matchID);
    }
    const dummyData = [{
        "id": 1,
        "p1": "Pattin",
        "p2": "Uccelli",
        "time": "7:44 AM"
    }, {
        "id": 2,
        "p1": "Steffie",
        "p2": "Caraher",
        "time": "7:26 PM"
    }, {
        "id": 3,
        "p1": "Homerus",
        "p2": "Tabord",
        "time": "6:09 PM"
    }, {
        "id": 4,
        "p1": "Jo",
        "p2": "Tomet",
        "time": "12:42 AM"
    }, {
        "id": 5,
        "p1": "Burton",
        "p2": "Jinkins",
        "time": "7:53 PM"
    }, {
        "id": 6,
        "p1": "Sibby",
        "p2": "Smurthwaite",
        "time": "2:00 PM"
    }, {
        "id": 7,
        "p1": "Aleksandr",
        "p2": "Negus",
        "time": "7:33 PM"
    }, {
        "id": 8,
        "p1": "Baldwin",
        "p2": "Loudiane",
        "time": "8:54 AM"
    }, {
        "id": 9,
        "p1": "Giselbert",
        "p2": "Tanby",
        "time": "11:16 AM"
    }, {
        "id": 10,
        "p1": "Jobina",
        "p2": "Fantin",
        "time": "4:35 PM"
    }]

    const [query, setQuery] = useState('');    
    
    return (
        <div>
            <h1>Match schedule Page</h1>
            <input placeholder="Enter player name to search" onChange={event => setQuery(event.target.value)} />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>matchID</th>
                        <th>Player1</th>
                        <th>Player2</th>
                        <th>time</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.filter(match => {
                        if (query === "") {
                            return match;
                        } else if (match.p1.toLowerCase().includes(query.toLowerCase()) || match.p2.toLowerCase().includes(query.toLowerCase())) {
                            return match;
                        }
                    }).map(dataElement => (
                        <tr key={dataElement.id} >
                            <td>{dataElement.id}</td>
                            <td>{dataElement.p1}</td>
                            <td>{dataElement.p2}</td>
                            <td>{dataElement.time}</td>
                            <td><button onClick={() => handleSubscribe(dataElement.id)} className='btn btn-warning'>Subscribe</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MatchSchedulePage;