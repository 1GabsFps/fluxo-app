import React from "react";
import { useNavigate } from "react-router-dom";
import Flogo from "../../img/FlogoTxt.svg";
import Header from "../../components/Header/Header";
import { MainContainer, HeaderContainer, GlobalStyle, SectionContainer, SectionTitle, SectionDescription, ImageSection } from "./LandingStyle";
import Button from "../../components/Buttons/button";
import PontoBusImagem from "../../img/PontoBus.jpeg";

export default function LandingPage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <div>
            <GlobalStyle />
            <MainContainer>
                <HeaderContainer>
                    <Header 
                        Item1="Sobre" 
                        Item2="Contato" 
                        Title={Flogo} 
                        Item3="Login" 
                        Item4="Home" 
                        Link1="/faq" 
                        Link2="/faq" 
                        Link3="/login" 
                        Link4="/home" 
                    />
                    <SectionContainer>
                        <SectionTitle>Simplifique a recarga do seu cartão de transporte. Rápido, fácil e sem complicações</SectionTitle>
                        <SectionDescription>Recarregue seu cartão de transporte em qualquer lugar, a qualquer hora, com novas opções de pagamento como Pix e Cartão de Crédito/Débito.</SectionDescription>
                        <Button Text="Login" onClick={handleLoginClick} />
                        <ImageSection src={PontoBusImagem} alt="Ilustração de um ponto de ônibus moderno" />
                    </SectionContainer>
                </HeaderContainer>
            </MainContainer>
        </div>
    );
}
