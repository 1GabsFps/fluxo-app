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
    font-size: 39px;
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
    margin: 30px;
    justify-content: center;
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


export const CardTitle = styled.h1`
    font-size: 50x;
    font-weight: bold;
`;

export const CardText = styled.p`
    margin-top: 20px;
    font-size: 35px;
    font-weight: bold;
    margin-top: 200px;
    font-family: 'Open Sans', sans-serif;
    color: white;
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