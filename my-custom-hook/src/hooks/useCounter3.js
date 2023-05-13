import React, { useState } from 'react';

const useCounter3 = ({
    initial = 0,
    lowerBound = 5,
    upperBound = 12
}) => {
    const [count, setCount] = useState(initial);
    const handleInc = () => {
        if (count < upperBound) {
            setCount(count + 1);
        }
    };
    const handleDec = () => {
        if (count > lowerBound) {
            setCount(count - 1);
        }
    };
    return {
        count,
        handleInc,
        handleDec
    };
};

export default useCounter3;