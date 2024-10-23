import styled from "styled-components";

export const Container = styled.div`
    border-radius: 5px;
    color: white;
    font-weight: bold;
    border: 1px solid lightblue;
    margin: 10px;
    padding: 10px;
    width: 200px;
    text-align: center;

    &:hover {
    cursor: pointer;
    background: lightblue;
    color: black;
    }
`