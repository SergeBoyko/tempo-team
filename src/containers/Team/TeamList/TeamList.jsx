import React, { Component } from 'react';

class TeamList extends Component {
    state = {}
    render() {
        const { teams } = this.props;
        let listTeams = teams;
        listTeams = teams.map(team => (
            <li key={team.id} className="list-group-item">{team.name}</li>
        )
        )
        return (
            <ul className="list-group">
                <li className="list-group-item active">All Groups</li>
                {listTeams}
            </ul>
        );
    }
}

export default TeamList;