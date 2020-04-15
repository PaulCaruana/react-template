import React, {Fragment} from "react";
import "./index.css";
import {If} from "react-deco";

import {useService} from "./services/user/Service";
import UserTable from "./scenes/users/Table";
import {AddUserForm, EditUserForm} from "./scenes/users/UserForm";

export default function App() {
    const {
        suspense, data, selected, error, mode, editSelected, createData, updateData, deleteData,
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
                    <UserTable users={data} editRow={editSelected} deleteUser={deleteData}/>
                </div>
                <div className="flex-large">
                    <If test={mode === "edit"} then={() =>
                        <Fragment>
                            <h2>Edit user</h2>
                            <EditUserForm user={selected} updateUser={updateData}/>
                        </Fragment>
                    } else={() =>
                        <Fragment>
                            <h2>Add user</h2>
                            <AddUserForm createUser={createData}/>
                        </Fragment>
                    }/>
                </div>
            </div>
        </div>
    );
}
