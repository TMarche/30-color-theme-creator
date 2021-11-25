import React from "react";
import styled from "styled-components";
import { Spacer } from "./components/genericStyled";

// What kind of styling do we want to be able to do?
// What do we want it to apply to?
// How should it be applied

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header style={{ background: "red", height: "200px" }}>
                    <h1 style={{ margin: "0 auto" }}>Color Theme Creator</h1>
                </header>
                <div
                    style={{
                        display: "flex",
                        height: "calc(100vh - 200px)",
                        background: "purple",
                    }}
                >
                    <div style={{ flex: 1, background: "yellow" }}></div>
                    <div style={{ flex: 1, background: "green" }}></div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
