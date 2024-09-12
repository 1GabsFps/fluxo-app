import React from 'react';
import { InputWrapper, InputContainer, InputLabel } from './InputStyle';

const Input = ({placeholder}) => (
    <InputWrapper>
        <InputContainer placeholder=" " id="input" />
        <InputLabel htmlFor="input">{placeholder}</InputLabel>
    </InputWrapper>
);

export default Input;