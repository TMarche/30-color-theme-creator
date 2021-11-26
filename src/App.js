import React from "react";
import styled from "styled-components";
import { Spacer, Header } from "./components/genericStyled";
import ColorBar from "./components/ColorBar";

// What kind of styling do we want to be able to do?
// What do we want it to apply to?
// How should it be applied

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header>
                    <h1>Color Theme Creator</h1>
                </Header>
                <div
                    style={{
                        display: "flex",
                        height: "calc(100vh - 200px)",
                        background: "purple",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            background: "yellow",
                        }}
                    >
                        <ColorBar />
                        <ColorBar />
                        <ColorBar />
                        <ColorBar />
                    </div>
                    <div style={{ flex: 1, background: "green" }}></div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
