import React from "react";

const UserList = ({loading, users, fetchUsers}) => {
    if (!users) return null;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}: {user.email}
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 요청하기</button>
        </div>
    );
}
export default UserList;