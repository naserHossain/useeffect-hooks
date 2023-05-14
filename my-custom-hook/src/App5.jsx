import React from "react";
import { styled } from "styled-components";

const BaseButton = styled.button`
    border: none;
    border-radius: 0.15rem;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1rem 1rem;
    cursor: pointer;
`;

const PrimaryButton = styled(BaseButton)`
    background: red;
    color: white;
`;

const App5 = () => {
    return (
        <div>
            <h2> Styled component </h2>
            <BaseButton dark>I am a button</BaseButton>
            <PrimaryButton> primary button</PrimaryButton>
        </div>
    );
};

export default App5;
