import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../../utiles/Spinner/Spinner';


class UsersDetails extends Component {
    state = {
        user: [],
        loading: true,
        groupdetails: false
    }

    componentDidMount() {
        this.getUser();
    }

    async getUser() {
        try {
            let response = await axios.get(`/user/${this.props.match.params.id}`);
            const user = response.data;
            this.setState({ user, groupdetails: true, loading: false });
        } catch (error) {
            console.log(error);
        }
    }

    handleSendToList = ({ history }) => {
        this.props.history.replace('/team/')
    }


    render() {
        const { user, groupdetails, loading } = this.state;

        let showString;
        let showLead;

        if (groupdetails && user) {

            let teamLead = user.lead_teams.length;
            const membersTeams = user.member_teams.map(m => m).join(", ");
            const quantiyOtTeams = user.member_teams.length;

            if (quantiyOtTeams === 1) {
                showString = <p className="card-text" data-test="UsersDetailsMemeber">Member of team "{membersTeams}"</p>
            }
            if (quantiyOtTeams > 1) {
                showString = <p className="card-text" data-test="UsersDetailsMemeber">Member of teams "{membersTeams}"</p>
            }
            if (quantiyOtTeams === 0) {
                showString = <p className="card-text" data-test="UsersDetailsMemeber">Member of no teams</p>
            }
            if (teamLead > 0) {
                showLead = <p className="card-text">Team Lead</p>
            }
        }

        return (
            <div className="card" data-test="UsersDetails">
                <div className="card-body">
                    {loading ? <Spinner /> : null}
                    <h5 className="card-title" data-test="UsersDetailsHeader">{user.name}</h5>
                    <p className="card-title" data-test="UsersDetailsUsername">Username: "{user.username}"</p>
                    <p className="card-title" data-test="UsersDetailsID">ID: "{user.id}"</p>
                    {showString}
                    {showLead}
                    <button onClick={this.handleSendToList} className="btn btn-primary">List of Teams</button>
                </div>
            </div>
        );
    }
}

export default UsersDetails; 