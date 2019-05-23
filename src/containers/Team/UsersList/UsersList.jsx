import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UsersList = ({ users, teamsDetails, groupdetails }) => {

    let usersList = users.map((user, index) => (
        <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
            <td>{user.username}</td>
        </tr>
    ))

    let lead;
    if (groupdetails && teamsDetails && users) {

        const leadId = teamsDetails.lead;
        const leadInfo = users.filter(u => u.id === leadId);

        lead = < tr key={leadId} >
            <th scope="row">1</th>
            <td><Link to={`/user/${leadInfo[0].id}`}>{leadInfo[0].name}</Link></td>
            <td>{leadInfo[0].username}</td>
            <td>Team Leader</td>
        </tr >

        usersList = teamsDetails.members.map((member, index) => (
            < tr key={users[member].id} >
                <th scope="row">{index + 2}</th>
                <td><Link to={`/user/${users[member].id}`}>{users[member].name}</Link></td>
                <td>{users[member].username}</td>
                <td></td>
            </tr >
        ))
    }

    let usersNumer = users.length;

    return (
        <React.Fragment>

            {!groupdetails && users && (<h2>There {usersNumer} users in list</h2>)}
            {groupdetails && teamsDetails && (<h2>There {teamsDetails.members.length} members in "{teamsDetails.name}" list</h2>)}

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        {groupdetails && teamsDetails && (<th scope="col">Role</th>)}
                    </tr>
                </thead>
                <tbody>
                    {groupdetails && teamsDetails && (lead)}
                    {usersList}
                </tbody>
            </table>

        </React.Fragment>
    );
}

UsersList.propTypes = {
    users: PropTypes.array,
    teamsDetails: PropTypes.object,
    groupdetails: PropTypes.bool
}

export default UsersList;