import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

export const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    background-color: #3A7786;
    width: 100%;
    height: 50px;
    border-radius: 0px 0px 25px 25px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    @media (max-width: 768px) {
        height: 44px;
        justify-content: center;
        border-radius: 0px;
    }
`;

export const HeaderTitle = styled.h1`
    color: #3E4648;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0;
`;

export const HeaderItens = styled.button`
    background: none;
    border: none;
    color: #fff;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    position: relative;
    transition: color 0.2s ease;

    &:hover {
        color: #d1ecf1;
    }

    &:hover::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 15%;
        width: 70%;
        height: 2px;
        background-color: #fff;
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 18px;
    }
`;

export const ItensContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 10px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 120px;
    height: 40px;
    cursor: pointer;
    transition: filter 0.3s ease;

    &:hover {
        filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.7));
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 35px;
    }
`;

export const CenteredImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const MobileMenu = styled.nav`
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #3A7786;
    position: fixed;
    top: 44px;
    left: 0;
    width: 100%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    z-index: 999;
    padding: 10px 0;

    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    }
`;
