import React, { Component } from 'react';
import TeamList from '../TeamList/TeamList'
import UsersList from '../UsersList/UsersList';
import axios from "axios";


class TeamGroup extends Component {
    state = {
        teams: []
    }

    getTeams = () => {
        axios
            .get("http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/")
            .then(response => {
                const teams = response.data;
                console.log('teams:', teams)
                this.setState({ teams });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    async componentDidMount() {
        await this.getTeams();
    }
    render() {
        const { teams } = this.state;
        return (
            <div className="row">
                <div className="col-3">
                    <TeamList teams={teams} />
                </div>
                <div className="col-9">
                    <UsersList />
                </div>
            </div>

        );
    }
}

export default TeamGroup;