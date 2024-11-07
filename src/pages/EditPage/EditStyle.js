import { styled, createGlobalStyle } from "styled-components";

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
        height: auto;
    }

    @media (max-width: 480px) {
        height: auto;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    padding: 20px;
    background-color: #383942;
    border-radius: 20px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3), 0px 12px 24px rgba(0, 0, 0, 0.2);
    color: white;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const FormTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-bottom: 20px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const FormLabel = styled.label`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 3px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px; /* Add margin to ensure consistent spacing */
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const PasswordInputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const TogglePasswordButton = styled.button`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    padding: 5px;
    margin-left: 10px; /* Add margin to ensure consistent spacing */
`;
