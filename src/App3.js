import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import TodosGateway from "./gateways/Todos";
import Todos from "./services/Todos";
import TodosReducer from "./services/TodosReducer";

const initialState = {
    loading: true,
    data: null,
    error: null
};

function useFetch(url) {
    const [state, dispatch] = React.useReducer(TodosReducer, initialState);

    console.log(state);

    useEffect(() => {
        dispatch({ type: "fetch" });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: "success", data: data });
            })
            .catch(err => {
                dispatch({ type: "error", error: err });
            });

    }, []);

    return {
        loading: state.loading,
        data: state.data,
        error: state.error
    };
}

function App() {
    const { loading, data, error } = useFetch(
        `https://todo-backend-golang-goa.herokuapp.com/todos`
    );
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <>
                <p>{error}</p>
            </>
        );
    }
    console.log(data)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React {data[0].title}
                </a>
            </header>
        </div>
    );
}

export default App;
