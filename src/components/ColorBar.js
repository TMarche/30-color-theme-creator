import React from "react";
import styled from "styled-components";
import ColorInput from "./ColorInput";

class ColorBar extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="color-bar--flex-item">
                    <div className="color-bar--name-container">
                        {this.props.displayName}
                    </div>
                </div>
                <ColorInput
                    color={this.props.color}
                    setColor={this.props.setColor}
                />
            </div>
        );
    }
}

export default styled(ColorBar)`
    flex: 1;
    display: flex;
    background: black;
    gap: 2px;

    .color-bar--flex-item {
        background: white;
        flex: 3;
        position: relative;
    }

    .color-bar--name-container {
        font-size: 24px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
