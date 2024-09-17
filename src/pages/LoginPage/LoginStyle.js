import {styled, createGlobalStyle} from "styled-components";
import Flogo from "../../img/Flogo.svg";

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
    width: 100%;
    height: 100vh;
    background-color: #3E3D3D;
    border: none;

    @media (max-width: 768px) {
        height: 100vh;
    }

`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3A7786;
    background-image: url(${Flogo});
    background-repeat: repeat;
    background-size: 120px;
    width: 100%;
    height: 100%;
    border-radius: 30px 0px 0px 30px; 

    @media (max-width: 768px) {
        width: 0;
    }

`;

export const ButtonConteiner = styled.div`
    display: flex;
    gap: 10px;
`;


export const Image = styled.img`
    width: 200px;
    height: 100px;
`;


export const ForgotPassword = styled.a`
    color: white;
    font-size: 1em;
    padding: 40px;
    text-decoration: none;
    cursor: pointer;

`;