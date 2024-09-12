import styled from "styled-components";

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
    margin: 0;

`;

export const HeaderItens = styled.div`
    color: #3E4648;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const ItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;