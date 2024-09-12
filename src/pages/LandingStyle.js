import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 1000px;
    background-color: #3E3D3D;
    border: none;
`;

export const HeaderContainer = styled.div`
    align-items: center;
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 30px;
    justify-content: space-between;
`;

export const SectionTitle = styled.h1`
    padding-top: 50px;
    color: white;
    font-size: 3em;
    max-width: 40%;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2.5em;
        max-width: 80%;
    }
`;

export const SectionDescription = styled.p`
    padding-top: 20px;
    padding-bottom: 30px;
    color: white;
    font-size: 1.5em;
    max-width: 40%;
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.2em;
        max-width: 80%;
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ImageSection = styled.img`
    margin-top: 50px;
    width: 900px;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;