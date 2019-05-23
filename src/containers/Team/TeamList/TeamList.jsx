import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TeamList = ({ teams, selectTeam, selectedTeam }) => {

    let listTeams = teams;
    listTeams = teams.map(team => (

        <li key={team.id}
            onClick={() => selectTeam(team)}
            className={(selectedTeam.id === team.id) ? "list-group-item active"
                : "list-group-item"}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>

        </li>
    ))
    return (
        <ul className="list-group" data-test="TeamList">
            {listTeams}
        </ul>
    );
}

TeamList.propTypes = {
    teams: PropTypes.array,
    selectTeam: PropTypes.func,
    selectedTeam: PropTypes.object
}

export default TeamList;