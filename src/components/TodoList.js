import React from "react";

const UserList = ({loading, todos, fetchTodos}) => {
    if (!todos) return null;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <ul>
                {todos.map(user => (
                    <li key={user.id}>
                        {user.name}: {user.email}
                    </li>
                ))}
            </ul>
            <button onClick={fetchTodos}>다시 요청하기</button>
        </div>
    );
}
export default UserList;