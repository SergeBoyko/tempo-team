import React from 'react';

const UsersList = ({ users }) => {

    const usersList = users.map((user, index) => (
        <tr key={user.name + user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
        </tr>
    ))

    let usersNumer = users.length;

    return (

        <React.Fragment>
            <h2>There {usersNumer} users in list</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
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