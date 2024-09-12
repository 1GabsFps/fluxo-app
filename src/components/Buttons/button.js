import React from "react";
import { ButtonStyle, InvertedButtonStyle } from "./btnStyle";


const Button = ({Text, inverted}) => {

    if (inverted == 'true') {
        return (
            <InvertedButtonStyle>{Text}</InvertedButtonStyle>
        );
    }
    return (
        <ButtonStyle>{Text}</ButtonStyle>
    );
}
export default Button;