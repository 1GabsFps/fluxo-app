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
    align-items: center;
    display: flex;
    background-color: #3A7786;
    width: 100%;
    height: 50px;
    border-radius: 0px 0px 30px 30px;
    border-width: 0px 0px 5px 0px;
    border-style: solid;
    border-color: #3E4648;
    justify-content: space-between;
    position: fixed;
    top: 0;
`;

export const HeaderTitle = styled.h1`
    color: #3E4648;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0;
`;

export const HeaderItens = styled.div`
    color: #fff;
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

export const Image = styled.img`
    width: 120px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.7));
        transition: 0.6s;
    }
`;
