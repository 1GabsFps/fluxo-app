import React from "react";
import PontoNeon from "../../img/PontoNeon.jpg";
import PontoPixado from "../../img/PontoPixado.jpg";
import Bondinho from "../../img/Bondinho.jpg";

import { GlobalStyle, MainContainer, SectionTitle, SectionDescription, SectionContainer, ImagesConteiner, Imagem, ImgDescription } from "./MidStyle";


export default function LandingMid() {
    return (
        <div>
            <MainContainer>
                <SectionContainer>
                    <SectionTitle>
                        Como Funciona? 
                    </SectionTitle>
                    <SectionDescription>
                        Um simples guia do FLUXO
                    </SectionDescription>
                    <ImagesConteiner>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Imagem src={PontoNeon} />
                            <ImgDescription>
                                Crie sua Conta
                            </ImgDescription>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Imagem src={PontoPixado} />
                            <ImgDescription>
                                Recarregue seu Cartão
                            </ImgDescription>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Imagem src={Bondinho} />
                            <ImgDescription>
                                Pague Sua Passagem
                            </ImgDescription>
                        </div>
                    </ImagesConteiner>
                </SectionContainer>
            </MainContainer>
        </div>
    );
}