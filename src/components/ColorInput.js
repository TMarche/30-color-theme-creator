import React from "react";
import styled from "styled-components";

class ColorInput extends React.Component {
    render() {
        return (
            <div
                className={this.props.className}
                style={{
                    flex: 1,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <input
                    style={{
                        height: "120%",
                        width: "120%",
                        position: "absolute",
                        top: "-10%",
                        left: "-10%",
                    }}
                    type="color"
                />
            </div>
        );
    }
}

export default styled(ColorInput)``;
