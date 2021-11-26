import React from "react";
import styled from "styled-components";

class DemoCard extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="demo-card--bar">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="demo-card--main-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque maxime quam numquam eius minima velit
                    consequatur, voluptas dolore distinctio earum! Harum,
                    praesentium numquam vel nobis fugiat quasi minus iste
                    tenetur sunt reprehenderit sint. Vero, accusantium dolor
                    molestias, enim illo non soluta unde ducimus, laboriosam
                    facere quod eveniet cumque quam voluptatum?
                </div>
            </div>
        );
    }
}

export default styled(DemoCard)`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 5em;
    height: calc(100% - 10em);
    border-radius: 10px;
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
        0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);

    .demo-card--bar {
        border-radius: 10px 10px 0 0;
        background: red;
        padding: 0.5em 1em;
        color: ${(props) => props.colors.onSecondary || "black"};
        background-color: ${(props) => props.colors.secondary || "black"};
    }

    .demo-card--main-content {
        border-radius: 0 0 10px 10px;
        flex: 1;
        padding: 0.5em 1em;
        background: yellow;
        overflow: hidden;
        color: ${(props) => props.colors.onPrimary || "black"};
        background: ${(props) => props.colors.primary || "black"};
    }
`;
