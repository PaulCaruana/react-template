import React from "react";

const Counter = ({count, increment, decrement}) => {
    return (
        <div>
            <span>Count: {count}</span>
            <button type="button" onClick={increment}>+1</button>
            <button type="button" onClick={decrement}>-1</button>
        </div>
    );
};

export default Counter;