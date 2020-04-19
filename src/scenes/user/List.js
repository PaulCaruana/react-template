import React from "react";
import {useNavigate} from "react-router-dom";
import {USERS_ADD_PAGE, USERS_EDIT_PAGE} from ".";

import useService from "../../services/user/Service";
import UserTable from "./Table";

export default function List() {
    const {hasUsers, users, error, deleteUser} = useService(true);
    const navigate = useNavigate();
    const addUser = () => navigate(USERS_ADD_PAGE);
    const editUser = (id) => navigate(`/${id}${USERS_EDIT_PAGE}`);

    if (error) {
        return <div>Error: {error}, please reload</div>;
    }
    if (!hasUsers) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container">
            <div className="flex-row">
                <UserTable
                    users={users} addUser={addUser} editUser={editUser} deleteUser={deleteUser}
                />
            </div>
        </div>
    );
}
