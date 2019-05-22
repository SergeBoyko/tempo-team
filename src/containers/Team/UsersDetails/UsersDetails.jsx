import React, { Component } from 'react';
import axios from 'axios';


class UsersDetails extends Component {
    state = {
        user: [],
        groupdetails: false
    }

    componentDidMount() {
        this.getUser();
    }

    async getUser() {
        try {
            let response = await axios.get(`/user/${this.props.match.params.id}`);
            const user = response.data;
            this.setState({ user, groupdetails: true });
        } catch (error) {
            console.log(error);
        }
    }

    handleSendToList = ({ history }) => {
        this.props.history.replace('/team/')
    }


    render() {
        const { user, groupdetails } = this.state;

        let showString;
        let showLead;

        if (groupdetails && user) {

            let memberTeams;
            let teamLead = user.lead_teams.length;
            const membersTeams = user.member_teams.map(m => m).join(", ");
            const quantiyOtTeams = user.member_teams.length;

            if (quantiyOtTeams === 1) {
                showString = <p className="card-text">Member of team "{membersTeams}"</p>
            }
            if (quantiyOtTeams > 1) {
                showString = <p className="card-text">Member of teams "{membersTeams}"</p>
            }
            if (quantiyOtTeams === 0) {
                showString = <p className="card-text">Member of no teams</p>
            }
            if (teamLead > 0) {
                showLead = <p className="card-text">Team Lead</p>
            }
        }

        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-title">Username: "{user.username}"</p>
                    <p className="card-title">ID: "{user.id}"</p>
                    {showString}
                    {showLead}
                    <button onClick={this.handleSendToList} className="btn btn-primary">List of Teams</button>
                </div>
            </div>
        );
    }
}

export default UsersDetails; 