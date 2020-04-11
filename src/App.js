import React, {useState, Fragment} from "react";
import "./index.css";

import {useExecQuery} from "./services/UserService";
import UserTable from "./scenes/users/Table";
import EditUser from "./scenes/users/Edit";
import {If} from "react-deco";


export default function App() {
    const {suspense, data, selected, error, selectData, deleteData} = useExecQuery();
    const [editing, setEditing] = useState(false);
    const editRow = user => {
        setEditing(true);
        selectData(user);
    };
    //console.log(selected, editing)


    if (error) {
        return <div>Error occurred, please reload</div>;
    }
    if (suspense) return <div>Loading...</div>;

    //console.log("suspense", suspense)
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <If test={editing && selected} then={() =>
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
                    <UserTable users={data} editRow={editRow} deleteUser={deleteData}/>
                </div>
            </div>
        </div>
    );
}
