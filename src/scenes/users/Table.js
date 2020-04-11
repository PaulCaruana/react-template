import React from "react";

const UserTable = ({loading, users, updateUser, deleteUser}) => {
    if (!users) return null;
    if (loading) return <div>Loading...</div>;
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
                    <td>
                        <button onClick={() => updateUser(user)} className="button muted-button">
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
}

export default UserTable;