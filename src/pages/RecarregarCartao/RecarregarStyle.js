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
        background-color: #3E3D3D;
        font-family: 'Open Sans', sans-serif;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #3E3D3D;
    border: none;
    padding-top: 60px;

    @media (max-width: 768px) {
        min-height: 100vh;
    }
`;

export const HiUser = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 5px;
    }
`;

export const UserTitle = styled.h1`
    color: white;
    font-size: 36px;
    font-weight: bold;
    margin-left: 20px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 40px auto;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    background-color: #383942;
    border-radius: 20px;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
    color: white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3), 0px 12px 24px rgba(0, 0, 0, 0.2);
`;

export const CardTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
`;

export const CardText = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-top: 100px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    text-align: center;
`;

export const ButtonConteiner = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: flex-start;
`;

export const CardLogo = styled.img`
    width: 100px;
    height: 100px;
`;
