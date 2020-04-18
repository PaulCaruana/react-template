import React from "react";
import {useNavigate} from "react-router-dom";

import useService from "../../services/user/Service";
import UserTable from "./Table";

export default function List() {
    const {hasUsers, users, error, deleteUser} = useService(true);
    const navigate = useNavigate();

    if (error) {
        return <div>Error: {error}, please reload</div>;
    }
    if (!hasUsers) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container">
            <div className="flex-row">
                <h1>View users</h1>
                <button onClick={() => navigate("/add")} className="button muted-button">
                    Add
                </button>
                <UserTable
                    users={users} selectEdit={(id) => navigate(`/${id}/edit`)} deleteUser={deleteUser}
                />
            </div>
        </div>
    );
}
