import React, { PureComponent } from 'react';

class UsersList extends PureComponent {
    state = {}
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Team Lead</td>

                    </tr>
                </tbody>
            </table>
        );
    }
}

export default UsersList;