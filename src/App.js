import React from "react";
import "./index.css";

import {useExecQuery} from "./services/UserService";
import UserTable from "./scenes/users/Table";
import useCounter from "./services/CounterService";
import Counters from "./components/Counters";

export default function App() {
    const {suspense, data, error, fetch, deleteData} = useExecQuery();
    const {count, increment, decrement} = useCounter();

    if (error) {
        return <div>Error occurred, please reload</div>;
    }
    console.log("suspense", suspense)
    return (
        <div>
            <UserTable loading={suspense} users={data} fetchUsers={fetch} deleteUser={deleteData} />
            <Counters count={count} increment={increment} decrement={decrement}/>
        </div>
    );
}
