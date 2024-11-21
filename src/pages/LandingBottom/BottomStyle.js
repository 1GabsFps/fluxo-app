import styled from "styled-components";
import 'typeface-archivo-black'

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #3E3D3D;
    border: none;

`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    

    @media (max-width: 1010px) {
        flex-direction: column;
    }
`;

export const CardContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 3em;
    max-width: 40%;
    margin: 0;
    text-align: center;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 800;

    @media (max-width: 1024px) {
        font-size: 2.8em;
        max-width: 60%;
    }

    @media (max-width: 768px) {
        font-size: 2.5em;
        max-width: 80%;
    }

    @media (max-width: 480px) {
        font-size: 2em;
        max-width: 90%;
    }
`;

export const AboutContainer = styled.div`
    margin-top: 50px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    min-width: 500px;
    align-items: center;

    @media (max-width: 768px) {
        min-width: 300px;
        flex-direction: column;
        width: 100%;
    }
`;

export const AboutInfos = styled.div`
    display: flex;
    background-color: #2D2D2D;
    margin-bottom: 20px;
    margin-top: 20px;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    height: 150px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        height: 120px;
        flex-direction: column;
        height: auto;
    }
`;

export const Text = styled.p`
    padding: 20px;
    color: white;
    max-width: 60%;
    font-size: 1.5em;
    margin: 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

`;

export const Imagem = styled.img`
    height: 20px;
    width: 20px;

    

`;

export const Grafico = styled.img`
    width: 50%;
    height: 50%;

    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
    }
`;