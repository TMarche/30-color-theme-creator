import React from "react";
import styled from "styled-components";

class ColorInput extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <input
                    type="color"
                    value={this.props.color}
                    onChange={(e) => this.props.setColor(e)}
                />
            </div>
        );
    }
}

export default styled(ColorInput)`
    flex: 1;
    overflow: hidden;
    position: relative;

    input {
        height: 200%;
        width: 200%;
        position: absolute;
        top: -50%;
        left: -50%;
    }
`;
