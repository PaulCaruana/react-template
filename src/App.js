import React from "react";
import "./index.css";

import {useExecQuery, useDeleteData} from "./services/UserService";
import UserTable from "./scenes/users/Table";
import useCounter from "./services/CounterService";
import Counters from "./components/Counters";

export default function App() {
    const {fetching, users, error: fetchError, fetch} = useExecQuery();
    const {deleting, error: deleteError, deleteData} = useDeleteData();
    const {count, increment, decrement} = useCounter();

    if (fetchError || deleteError) {
        return <div>Error occurred, please reload</div>;
    }
    //console.log(users)
    return (
        <div>
            <UserTable loading={fetching} users={users} fetchUsers={fetch} deleteUser={deleteData} />
            <Counters count={count} increment={increment} decrement={decrement}/>
        </div>
    );
}
