import React from "react";

const UserTable = ({users, editRow, deleteUser}) => {
    if (!users) return null;
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td style={{whiteSpace: "nowrap"}}>
                        <button onClick={() => editRow(user.id)} className="button muted-button">
                            Edit
                        </button>
                        <button onClick={() => deleteUser(user.id)} className="button muted-button">
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTable;