import React from "react";
import "./index.css";
import {useQuery as useUsersQuery} from "./services/Users";
import useCounter from "./services/Counter";
import UserList from "./components/UserList";
import Counter from "./components/Counter";
import {useExecQuery} from "./services/UserService";
import * as myModule from "./services/UserService";
import myModule2 from "./services/UserService";
export default function App() {
    const {loading, users, error, fetch} = useExecQuery();
    //console.log("state2", loading, users, error)
    const {count, increment, decrement} = useCounter();
    console.log(myModule)
    console.log(myModule2)
    if (error) return <div>Error...</div>;

    return (
        <div>
            <UserList loading={loading} users={users} fetchUsers={fetch}/>
            <Counter count={count} increment={increment} decrement={decrement}/>
        </div>
    );
}
