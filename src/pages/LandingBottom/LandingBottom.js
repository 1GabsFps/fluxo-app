import React from "react";
import Cartoes from "../../components/Cards/Cartoes";
import { MainContainer, CardContainer, InfoContainer, Title, AboutContainer, Text, AboutInfos, Imagem, Grafico } from "./BottomStyle";
import Comum from "../../svg/Comum.svg";
import Senior from "../../svg/Senior.svg";
import Estudante from "../../svg/Estudante.svg";
import Especial from "../../svg/Especial.svg";
import ValeTransporte from "../../svg/ValeTransporte.svg";
import Graph from "../../img/Grafico.png";
import Check from "../../img/Check.png";

export default function LandingBottom() {
    return (
        <MainContainer>
            <InfoContainer>
                <AboutContainer>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '90px'}}>
                        <Title>Beneficios</Title>
                        <Grafico src={Graph} alt="Grafico" />
                    </div>
                    <AboutInfos>
                        <Imagem src={Check}/>
                        <Text>Pagamentos instantâneos via Pix e cartões.</Text>
                    </AboutInfos>
                    <AboutInfos>
                        <Imagem src={Check}/>
                        <Text>Acesso rápido ao saldo e histórico de recargas.</Text>
                    </AboutInfos>
                    <AboutInfos>
                        <Imagem src={Check}/>
                        <Text>Renove seu cartão de forma prática e segura.</Text>
                    </AboutInfos>
                    <AboutInfos>
                        <Imagem src={Check}/>
                        <Text>Cartão virtual com tecnologia NFC para maior conveniência.</Text>
                    </AboutInfos>
                </AboutContainer>
                <CardContainer>
                    <Cartoes Titulo="Senior" Texto="Compre agora sua passagem e recarregue com segurança"  Botao="Saiba Mais" Imagem={Senior}/>
                    <Cartoes Titulo="Comum" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Comum}/>
                    <Cartoes Titulo="Estudante" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Estudante}/>
                    <Cartoes Titulo="Especial" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Especial}/>
                    <Cartoes Titulo="Vale Transporte" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={ValeTransporte}/>
                </CardContainer>
            </InfoContainer>
        </MainContainer>
    );
}