import React, { Component } from 'react';
import TeamList from '../TeamList/TeamList'
import UsersList from '../UsersList/UsersList';
import axios from "axios";



class TeamGroup extends Component {
    state = {
        teams: [],
        users: [],
        selectedTeam: ''
    }

    getTeams = () => {
        axios.all([
            axios.get("/team/"),
            axios.get("/user/")
        ])
            .then(axios.spread((teamsRes, userRes) => {
                const teams = teamsRes.data;
                const users = userRes.data;
                this.setState({ teams, users });
            }))
            .catch(function (error) {
                console.log(error);
            });
    };

    async componentDidMount() {
        await this.getTeams();
    }
    render() {
        const { teams, users } = this.state;
        return (
            <div className="row">
                <div className="col-3">
                    <TeamList teams={teams} />
                </div>
                <div className="col-9">
                    <UsersList users={users} />
                </div>
            </div>

        );
    }
}

export default TeamGroup;