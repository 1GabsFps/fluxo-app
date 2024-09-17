import React from "react";
import { ButtonStyle, InvertedButtonStyle } from "./btnStyle";

const Button = ({ Text, inverted, onClick }) => {
    if (inverted === 'true') {
        return (
            <InvertedButtonStyle onClick={onClick}>{Text}</InvertedButtonStyle>
        );
    }
    return (
        <ButtonStyle onClick={onClick}>{Text}</ButtonStyle>
    );
}

export default Button;