import {styled, createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        padding: 0;
        margin: 0;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #3E3D3D;
    border: none;

    @media (max-width: 768px) {
        height: 250vh;
    }

    @media (max-width: 480px) {
        height: auto;
    }
`;

export const HiUser = styled.div`
    display: flex;
    width: 95%;
    margin-top: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    @media (max-width: 768px) {
        padding: 5px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const UserTitle = styled.h1`
    color: white;
    font-size: 39px;
    font-weight: bold;
    margin-left: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;


export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 30px;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 10px;
        margin: 10px;
    }

    @media (max-width: 480px) {
        gap: 5px;
        margin: 5px;
    }
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

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;


export const CardTitle = styled.h1`
    font-size: 50x;
    font-weight: bold;
    font-family: "fredoka one", sans-serif;
    font-weight: 800;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const CardText = styled.p`
    margin-top: 20px;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

export const ButtonConteiner = styled.div`

    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: flex-start;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CardLogo = styled.img`
    width: 100px;
    height: 100px;
`;