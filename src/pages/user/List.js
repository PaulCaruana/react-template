import React from "react";
import {useNavigate} from "react-router-dom";

import useService from "../../services/user/Service";
import UserTable from "./Table";

export default function List() {
    const {hasItems, items, error, deleteItem} = useService(true);
    const navigate = useNavigate();

    if (error) {
        return <div>Error: {error}, please reload</div>;
    }
    if (!hasItems) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container">
            <div className="flex-row">
                <h1>View users</h1>
                <UserTable
                    users={items} selectEdit={(id) => navigate(`/${id}/edit`)} deleteUser={deleteItem}
                />
            </div>
        </div>
    );
}
