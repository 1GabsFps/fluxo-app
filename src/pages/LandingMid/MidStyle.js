import styled,  { createGlobalStyle }from "styled-components";



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
    height: 600px;
    background-color: #3A7786;
    border: none;

`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const SectionTitle = styled.h1`
    padding-top: 50px;
    color: white;
    font-size: 3em;
    max-width: 40%;
    margin: 0;
    text-align: center;
    font-family: 'Fredoka', sans-serif;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 2.5em;
        max-width: 80%;
    }
`;

export const SectionDescription = styled.p`
    padding-top: 20px;
    padding-bottom: 30px;
    color: white;
    font-size: 1.5em;
    max-width: 40%;
    margin: 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 1.2em;
        max-width: 80%;
    }
`;

export const ImagesConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Alinha todas as imagens no topo */
    justify-content: center;
`;

export const Imagem = styled.img`
    border-radius: 40px;
    width: 300px;
    height: 200px;
    margin-left: 20px;

    @media (max-width: 768px) {
        margin-left: 0;
        width: 120px;
        height: 100px;
    }
`;

export const ImgDescription = styled.p`
    color: white;
    font-size: 1.5em;
    max-width: 50%;
    text-align: center;
    margin-top: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 1.2em;
        max-width: 80%;
    }
`;