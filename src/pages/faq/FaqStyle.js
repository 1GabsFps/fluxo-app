import { styled, createGlobalStyle } from "styled-components";

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
    align-items: center;
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

export const SearchInput = styled.input`
    padding: 10px;
    margin: 20px 0;
    width: 60%;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    outline: none;

    &::placeholder {
        color: #aaa;
    }
`;

export const FaqContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 800px;
    margin: 20px 0;
    word-wrap: break-word;
`;

export const QuestionContainer = styled.div`
    width: 100%;
    background-color: #2C2C2C;
    padding: 15px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 5px;
    border-bottom: 2px solid white;
`;

export const QuestionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Question = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin: 0;
`;

export const Answer = styled.p`
    font-size: 16px;
    margin: 10px 0 0;
    color: white;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const ArrowIcon = styled.span`
    font-size: 24px;
    color: white;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
    transition: transform 0.3s ease;
`;
