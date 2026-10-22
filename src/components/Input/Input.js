import React from 'react';
import { InputWrapper, InputContainer, InputLabel } from './InputStyle';

const Input = ({ 
    id, 
    name, 
    placeholder, 
    value, 
    onChange, 
    type = "text",
    disabled = false,
    required = false,
    autoComplete
}) => {
    const inputId = id || (name ? `input-${name}` : `input-${(placeholder || 'field').toLowerCase().replace(/\s+/g, '-')}`);

    return (
        <InputWrapper>
            <InputContainer
                id={inputId}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
                disabled={disabled}
                required={required}
                autoComplete={autoComplete}
            />
            {placeholder && <InputLabel htmlFor={inputId}>{placeholder}</InputLabel>}
        </InputWrapper>
    );
};

export default Input;
