import styled from "styled-components";

export const Spacer = styled.div`
    padding: 1em;
`;

export const Header = styled.header`
    background: #b00020;
    height: 200px;
    color: white;
    h1 {
        margin: 0;
        text-align: center;
        line-height: 200px;
    }
`;

export const FlexItem = styled.div`
    flex: ${(props) => props.flex || 1};
`;
