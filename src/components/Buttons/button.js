import React from "react";
import { ButtonStyle, InvertedButtonStyle } from "./btnStyle";

const Button = ({ Text, inverted, onClick, type = "button", ...rest }) => {
    const isInverted = Boolean(inverted) && inverted !== 'false';
    if (isInverted) {
        return (
            <InvertedButtonStyle type={type} onClick={onClick} {...rest}>
                {Text}
            </InvertedButtonStyle>
        );
    }
    return (
        <ButtonStyle type={type} onClick={onClick} {...rest}>
            {Text}
        </ButtonStyle>
    );
};

export default Button;
