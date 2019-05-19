import React from 'react';

const UsersList = ({ users, teamsDetails, groupdetails }) => {

    const usersList = users.map((user, index) => (
        <tr key={user.name + user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
        </tr>
    ))

    let usersNumer = users.length;

    // let membersNumers = teamMembers.length;

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
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        </React.Fragment>
    );

}

export default UsersList;