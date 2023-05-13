import React from "react";

const App = () => {
    return (
        <div
            style={{
                width: "600px",
                display: "flex",
                gap: "1rem",
                justifyContent: "space-between",
            }}
        >
            <div>
                <h1>Users</h1>
            </div>
            <div>
                <h1>Posts</h1>
            </div>
        </div>
    );
};

export default App;
