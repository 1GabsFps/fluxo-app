import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    background-color: #000;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px #000000;

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;

    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 10px 0px #fff;
        transition: 0.6s;
    }   
    
`;

export const CardLogo = styled.img`
    width: 200px;
    height: 200px;
`;

export const CardText = styled.p`
    font-size: 20px;
    color: #fff;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    
`;

