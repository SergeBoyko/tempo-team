import React, { Component } from 'react';
import TeamList from '../TeamList/TeamList'
import UsersList from '../UsersList/UsersList';
import axios from "axios";
import NavBar from '../../../components/NavBar/NavBar';
import Spinner from '../../../utiles/Spinner/Spinner';



class TeamGroup extends Component {
    state = {
        teams: [],
        users: [],
        teamsDetails: {},
        groupdetails: false,
        searchQuery: "",
        loading: true,
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
                this.setState({ teams, users, loading: false });
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
        this.setState({ selectedTeam: team, searchQuery: "" })
    }
    handleSearch = query => {
        this.setState({ searchQuery: query });
    };
    getPagedData = () => {
        const { users, searchQuery } = this.state;
        let filteredUsers;
        if (searchQuery)
            filteredUsers = users.filter(u =>
                u.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        return { filteredUsers }
    }


    render() {
        const { teams, selectedTeam, users, groupdetails, teamsDetails, searchQuery, loading } = this.state;
        const { filteredUsers } = this.getPagedData();

        return (
            <React.Fragment>
                {loading ? <Spinner /> : null}
                <div className="row" data-test="TeamGroupNavBar">
                    <div className="col-12">
                        <NavBar value={searchQuery} onChange={this.handleSearch} groupdetails={groupdetails} />
                    </div>
                </div>
                <div className="row" data-test="TeamGroupTeamList">
                    <div className="col-12 col-md-3">
                        <TeamList teams={teams} selectTeam={this.handleSelectTeam} selectedTeam={selectedTeam} />
                    </div>
                    <div className="col-12 col-md-9" data-test="TeamGroupUserList">
                        <UsersList
                            users={filteredUsers ? filteredUsers : users}
                            groupdetails={groupdetails}
                            teamsDetails={teamsDetails}
                        />
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default TeamGroup;