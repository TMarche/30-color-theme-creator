import React from "react";
import styled from "styled-components";
import ColorInput from "./ColorInput";

class ColorBar extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="flex-item">
                    <div className="name-container">
                        {this.props.displayName}
                    </div>
                </div>
                <ColorInput />
            </div>
        );
    }
}

export default styled(ColorBar)`
    flex: 1;
    display: flex;
    background: white;

    .flex-item {
        flex: 3;
        position: relative;
    }

    .name-container {
        font-size: 24px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
