import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 150px;
    height: 50px;
    padding: 10px;
    background-color: #3A7786;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
    &:hover {
        background-color: #3A7760;
    }
`;

export const InvertedButtonStyle = styled.button`
    width: 150px;
    height: 50px;
    padding: 10px;
    background-color: transparent;
    color: #3A7786;
    border: 1px solid #3A7786;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #555;
        color: #fff;
    }
`;