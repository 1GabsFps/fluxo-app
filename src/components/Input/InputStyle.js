import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
    width: 300px;
    margin: 20px 0;
`;

export const InputContainer = styled.input`
    width: 100%;
    height: 50px;
    background-color: white;
    border: none;
    color : #3A7786;    
    border-left: 5px solid #3A7786;
    padding: 10px;
    font-size: 14px;
    transition: border-color 0.3s ease-in-out;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: -20px;
        font-size: 12px;
    }
`;

export const InputLabel = styled.label`
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 14px;
    color: #999;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
`;