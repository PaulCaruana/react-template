import React from "react";
import "./index.css";
import {If} from "react-deco";

import useService from "./services/user/Service";
import UserTable from "./scenes/users/Table";
import {AddUserForm, EditUserForm} from "./scenes/users/UserForm";

export default function App() {
    const {
        suspense, data, selected, error, mode, editSelected, createItem, updateItem, deleteItem,
    } = useService(true);

    if (error) {
        return <div>Error: {error}, please reload</div>;
    }
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <If test={suspense} then={() =>
                <div>Loading...</div>
            }/>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={data} editRow={editSelected} deleteUser={deleteItem}/>
                </div>
                <div className="flex-large">
                    <If test={mode === "edit"} then={() =>
                        <>
                            <h2>Edit user</h2>
                            <EditUserForm user={selected} updateUser={updateItem}/>
                        </>
                    } else={() =>
                        <>
                            <h2>Add user</h2>
                            <AddUserForm createUser={createItem}/>
                        </>
                    }/>
                </div>
            </div>
        </div>
    );
}
