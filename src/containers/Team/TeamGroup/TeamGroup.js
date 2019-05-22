import React, { Component } from 'react';
import TeamList from '../TeamList/TeamList'
import UsersList from '../UsersList/UsersList';
import axios from "axios";



class TeamGroup extends Component {
    state = {
        teams: [],
        users: [],
        teamsDetails: {},
        groupdetails: false,
        selectedTeam: { id: 0 }
    }

    getTeams = () => {
        axios.all([
            axios.get("/team/"),
            axios.get("/user/")
        ])
            .then(axios.spread((teamsRes, userRes) => {
                const teams = teamsRes.data;
                const defaulTeam = { name: "All Teams", id: 0 };
                teams.unshift(defaulTeam);
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

    async getTeam(teamId) {
        try {

            if (teamId === 0) {
                console.log('teamId', teamId)
                const teamsDetails = {};
                this.setState({ teamsDetails, groupdetails: false });
                return
            }
            let link = `/team/${teamId}`;

            let response = await axios.get(link)
            this.setState({
                teamsDetails: response.data,
                groupdetails: true
            })
        } catch (err) {
            console.error(err)
        }
    }

    handleSelectTeam = (team) => {
        const teamId = team.id;
        this.getTeam(teamId);
        this.setState({ selectedTeam: team })
    }
    render() {
        const { teams, users, selectedTeam, groupdetails, teamsDetails } = this.state;

        return (
            <div className="row">
                <div className="col-12 col-md-3">
                    <TeamList teams={teams} selectTeam={this.handleSelectTeam} selectedTeam={selectedTeam} />
                </div>
                <div className="col-12 col-md-9">
                    <UsersList
                        users={users}
                        groupdetails={groupdetails}
                        teamsDetails={teamsDetails}
                    />
                </div>
            </div>

        );
    }
}

export default TeamGroup;