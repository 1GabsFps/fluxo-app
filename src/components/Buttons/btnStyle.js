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
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
    &:hover {
        background-color: #3A7760;
    }
    @media (max-width: 768px) {
        width: 120px;
        height: 40px;
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
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    &:hover {
        background-color: #555;
        color: #fff;
    }
    @media (max-width: 768px) {
        width: 120px;
        height: 40px;
    }
`;