import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import TodosGateway from "./gateways/Todos";
import Todos from "./services/Todos";

function App() {
    const todos = Todos(TodosGateway());
    let results
    useEffect(() => {
        results = todos.fetch();
        console.log("S", results.loading)
    }, []);
    console.log("L", results)
   // if (loading) {
    //    return <p>Loading...</p>;
    //}
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
