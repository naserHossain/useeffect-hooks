import React, { useState } from "react";
import useCounter3 from "./hooks/useCounter3";

const CounterController = ({ count, handleInc, handleDec }) => {
    return (
        <div>
            <button onClick={handleInc}>plus</button>
            <span>{count}</span>
            <button onClick={handleDec}>subs</button>
        </div>
    );
};
const App3 = () => {
    const {
        count: count1,
        handleInc: handleInc1,
        handleDec: handleDec1,
    } = useCounter3({ initial: 5 });
    const {
        count: count2,
        handleInc: handleInc2,
        handleDec: handleDec2,
    } = useCounter3({ initial: 7 });
    const {
        count: count3,
        handleInc: handleInc3,
        handleDec: handleDec3,
    } = useCounter3({ initial: 10 });

    return (
        <div>
            <h2> Hello from app</h2>
            <CounterController
                count={count1}
                handleInc={handleInc1}
                handleDec={handleDec1}
            />
            <CounterController
                count={count2}
                handleInc={handleInc2}
                handleDec={handleDec2}
            />
            <CounterController
                count={count3}
                handleInc={handleInc3}
                handleDec={handleDec3}
            />
        </div>
    );
};

export default App3;
