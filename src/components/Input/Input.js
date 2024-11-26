import React from 'react';
import { InputWrapper, InputContainer, InputLabel } from './InputStyle';

const Input = ({ placeholder, value, onChange, type = "text" }) => (
    <InputWrapper>
        <InputContainer
            placeholder={placeholder}
            id="input"
            value={value}
            onChange={onChange}
            type={type}
        />
        <InputLabel htmlFor="input">{placeholder}</InputLabel>
    </InputWrapper>
);

export default Input;