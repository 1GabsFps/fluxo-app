import React from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const handleSaibaMais = () => {
        navigate("/faq");
    };

    return (
        <MainContainer>
            <InfoContainer>
                <AboutContainer>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '90px'}}>
                        <Title>Benefícios</Title>
                        <Grafico src={Graph} alt="Gráfico demonstrando os benefícios do Fluxo App" />
                    </div>
                    <AboutInfos>
                        <Imagem src={Check} alt="Ícone de verificação" />
                        <Text>Pagamentos instantâneos via Pix e cartões.</Text>
                    </AboutInfos>
                    <AboutInfos>
                        <Imagem src={Check} alt="Ícone de verificação" />
                        <Text>Acesso rápido ao saldo e histórico de recargas.</Text>
                    </AboutInfos>
                    <AboutInfos>
                        <Imagem src={Check} alt="Ícone de verificação" />
                        <Text>Renove seu cartão de forma prática e segura.</Text>
                    </AboutInfos>
                    <AboutInfos>
                        <Imagem src={Check} alt="Ícone de verificação" />
                        <Text>Cartão virtual com tecnologia NFC para maior conveniência.</Text>
                    </AboutInfos>
                </AboutContainer>
                <CardContainer>
                    <Cartoes Titulo="Sênior" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Senior} onClick={handleSaibaMais} />
                    <Cartoes Titulo="Comum" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Comum} onClick={handleSaibaMais} />
                    <Cartoes Titulo="Estudante" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Estudante} onClick={handleSaibaMais} />
                    <Cartoes Titulo="Especial" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={Especial} onClick={handleSaibaMais} />
                    <Cartoes Titulo="Vale Transporte" Texto="Compre agora sua passagem e recarregue com segurança" Botao="Saiba Mais" Imagem={ValeTransporte} onClick={handleSaibaMais} />
                </CardContainer>
            </InfoContainer>
        </MainContainer>
    );
}
