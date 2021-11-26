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
    background: purple;
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 2em;
    height: calc(100% - 4em);

    .demo-card--bar {
        background: red;
        padding: 0.5em 1em;
    }

    .demo-card--main-content {
        flex: 1;
        padding: 0.5em 1em;
        background: yellow;
        overflow: hidden;
    }
`;
