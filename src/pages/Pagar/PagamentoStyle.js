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

export const HeaderContainer = styled.div`
    display: flex;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
`;

export const MetodoPagamento = styled.div`
    display: flex;
    gap: 20px;
    align-self: center;
    justify-content: center;
    align-items: center;
    background-color: #262626;
    border-radius: 10px;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }
`;

export const FormPagamento = styled.form`
    background-color: #262626;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 1000px;
    height: 500px;
    margin: 20px;
    align-self: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        height: auto;
        padding: 10px;
    }
`;

export const Image = styled.img`
    margin-left: 150px;
    width: 300px;
    height: 500px;

    @media (max-width: 768px) {
        margin-left: 0;
        width: 200px;
        height: auto;
    }
`;


export const InputsConteiner = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
    
`;

export const Title = styled.h1` 
    color: #262626;
    font-size: 39px;
    font-weight: bold;
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;