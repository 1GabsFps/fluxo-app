import styled, { createGlobalStyle } from "styled-components";

// Importando a fonte do Google Fonts
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

export const HeaderContainer = styled.div`
    margin-top: 20px;
    align-items: center;
    display: flex;
    background-color: #3A7786;
    width: 100%;
    height: 50px;
    border-radius: 30px;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    color: #3E4648;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0;
`;

export const HeaderItens = styled.div`
    color: #3E4648;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    align-items: center;
    padding: 10px;

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 0px;
        margin-left: 5px;
    }
`;

export const ItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;