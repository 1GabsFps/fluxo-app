import styled, { createGlobalStyle } from "styled-components";
import { FaSearch } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #f4f4f4;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #3E3D3D;
    padding-top: 60px;
`;

export const FaqTitle = styled.h1`
    color: white;
    font-size: 36px;
    font-weight: bold;
    margin: 20px;
    text-align: center;
`;

export const SearchInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    
`;

export const SearchIcon = styled(FaSearch)`
    position: absolute;
    color: black;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
`;

export const SearchInput = styled.input`
    padding: 10px;
    padding-left: 30px;
    align-self: center;
    width: 5%;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    outline: none;
    transition: width 0.3s ease-in-out;

    &::placeholder {
        color: transparent;
    }

    &:focus::placeholder {
        color: #aaa;
    }

    &:focus + ${SearchIcon} {
        opacity: 0;
    }
    &:hover + ${SearchIcon} {
        opacity: 0;
    }
    &:hover::placeholder {
        color: #aaa;
    }

    &:hover {
        width: 60%;
    }

    &:focus {
        width: 60%;
    }
`;

export const FaqContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 100px;
    word-wrap: break-word;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const QuestionContainer = styled.div`
    width: 100%;
    padding: 15px;
    margin: 10px 0;
`;

export const QuestionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Question = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin: 0;
    font-family: 'Arial', sans-serif;
`;

export const Answer = styled.p`
    font-size: 16px;
    margin: 10px 5px 0;
    font-weight: 400;
    color: white;
    font-family: 'Arial', sans-serif;
`;