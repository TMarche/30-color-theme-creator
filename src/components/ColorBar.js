import React from "react";
import styled from "styled-components";
import stled from "styled-components";
import ColorInput from "./ColorInput";

class ColorBar extends React.Component {
    render() {
        return (
            <div
                className={this.props.className}
                style={{
                    flex: 1,
                    background: "palevioletred",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        flex: 3,
                        background: "red",
                    }}
                ></div>
                <ColorInput />
            </div>
        );
    }
}

export default styled(ColorBar)`
    margin: 20px;
`;
