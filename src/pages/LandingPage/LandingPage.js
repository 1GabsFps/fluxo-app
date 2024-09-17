import React from "react";
import Cartoes from "../../components/Cards/Cartoes";
import Header from "../../components/Header/Header";
import { MainContainer, HeaderContainer, GlobalStyle, SectionContainer, SectionTitle, SectionDescription, ImageSection } from "./LandingStyle";
import Button from "../../components/Buttons/button";
import PontoBusImagem from "../../img/PontoBus.jpeg";
export default function LandingPage() {
    return (
        <div>
        <GlobalStyle />
            <MainContainer>
                <HeaderContainer>
                    <Header Item1="Sobre" Item2="Contato" Title="Fluxo" Item3="Login" Item4="Cadastro" />
                    <SectionContainer>
                        <SectionTitle>Simplifique a recarga do seu cartão de transporte. Rápido, fácil e sem complicações</SectionTitle>
                        <SectionDescription>Recarregue seu cartão de transporte em qualquer lugar, a qualquer hora, com novas opções de pagamento como Pix e Cartão de Crédito/Débito.</SectionDescription>
                        <Button Text="Login" />
                        <ImageSection src={PontoBusImagem} />
                    </SectionContainer>

                </HeaderContainer>
            </MainContainer>
        <GlobalStyle />
        </div>
    );

}