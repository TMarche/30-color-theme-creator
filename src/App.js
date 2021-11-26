import React from "react";
import styled from "styled-components";
import { Spacer, Header } from "./components/genericStyled";
import ColorBar from "./components/ColorBar";
import DemoCard from "./components/DemoCard";

// What kind of styling do we want to be able to do?
// What do we want it to apply to?
// How should it be applied

const config = [
    {
        id: "primary",
        displayName: "Primary",
    },
    {
        id: "secondary",
        displayName: "Secondary",
    },
    {
        id: "onPrimary",
        displayName: "On Primary",
    },
    {
        id: "onSecondary",
        displayName: "On Secondary",
    },
];

class App extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <Header>
                    <h1>Color Theme Creator</h1>
                </Header>
                <div className="app--main-content">
                    <div className="app--color-picker-container">
                        {config.map((x) => {
                            return (
                                <ColorBar
                                    key={x.id}
                                    id={x.id}
                                    displayName={x.displayName}
                                />
                            );
                        })}
                    </div>
                    <div className="app--demo-container">
                        <DemoCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default styled(App)`
    .app--main-content {
        display: flex;
        height: calc(100vh - 200px);
    }

    .app--color-picker-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: black;
        gap: 2px;
        padding: 2px;
    }

    .app--demo-container {
        flex: 1;
        position: relative;
    }
`;
