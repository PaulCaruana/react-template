import React from "react";
import "./index.css";

import {useExecQuery} from "./services/UserService";
import UserList from "./components/UserList";
import useCounter from "./services/CounterService";
import Counters from "./components/Counters";

export default function App() {
    const {suspense, users, error, fetch} = useExecQuery();
    const {count, increment, decrement} = useCounter();

    if (error) return <div>Error...</div>;

    return (
        <div>
            <UserList loading={suspense} users={users} fetchUsers={fetch}/>
            <Counters count={count} increment={increment} decrement={decrement}/>
        </div>
    );
}
