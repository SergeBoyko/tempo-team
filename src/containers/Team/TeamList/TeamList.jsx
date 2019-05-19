import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TeamList extends Component {
    state = {}
    render() {
        const { teams, selectTeam, selectedTeam } = this.props;
        let listTeams = teams;
        listTeams = teams.map(team => (

            <li key={team.id}
                onClick={() => selectTeam(team)}
                className={(selectedTeam.id === team.id) ? "list-group-item active"
                    : "list-group-item"}>
                <Link to={`/team/${team.id}`}>{team.name}</Link>

            </li>
        )
        )
        return (
            <ul className="list-group">
                {listTeams}
            </ul>
        );
    }
}

export default TeamList;