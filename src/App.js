import React, {Fragment} from "react";
import "./index.css";

import {useService} from "./services/UserService";
import UserTable from "./scenes/users/Table";
import EditUser from "./scenes/users/Edit";
import {If} from "react-deco";


export default function App() {
    const {suspense, data, selected, error, editMode, editSelected, deleteData} = useService(true);


    if (error) {
        return <div>Error: {error}, please reload</div>;
    }
    if (suspense) return <div>Loading...</div>;

    //console.log("suspense", suspense)
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <If test={editMode && selected} then={() =>
                        <Fragment>
                            <h2>Edit user</h2>
                            <EditUser user={selected}/>
                        </Fragment>
                    } else={() =>
                        <Fragment>
                            <h2>Add user</h2>
                        </Fragment>
                    }/>
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={data} editRow={editSelected} deleteUser={deleteData}/>
                </div>
            </div>
        </div>
    );
}
