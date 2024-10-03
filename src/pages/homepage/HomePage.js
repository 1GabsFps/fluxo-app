import React from "react";
import Headers from "../../components/Header/Header";
import Flogo from "../../img/FlogoTxt.svg";
import CLogo from "../../img/LogoBlue.svg";
import Button from "../../components/Buttons/button";
import axios from "axios";
import { GlobalStyle, MainContainer, UserTitle, HiUser, Card, CardsContainer, CardTitle, CardText, CardLogo, ButtonConteiner} from "./HomeStyle";

export default function HomePage() {
    const [usuario, setUsuario] = React.useState("");
    function HandleSair() {
        document.cookie = "token=; path=/";
        window.location.href = "/";
    }
    function getUsuario() {
        const token = document.cookie.split("=")[1];
        console.log(`Token enviado: ${token}`);

        const data = {
            token: token
        };
        axios.post('http://127.0.0.1:8000/getuser/', data)
        .then(response => {
            console.log(response.data);
            setUsuario(response.data.user);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
    }   
    React.useEffect(() => {
        getUsuario();
    }, []);

    return (
        <div>
            <GlobalStyle/>
            <MainContainer>
                <Headers Title={Flogo} Item1="Item1" Item2="Item2" Item3="Item3" Item4="Item4"/>
                <HiUser>
                    <UserTitle>Olá, {usuario} </UserTitle>
                    <Button Text="Sair" onClick={HandleSair}/>
                </HiUser>
                <CardsContainer>
                    <Card>
                        <CardLogo src={CLogo}/>
                        <CardTitle>Cartões</CardTitle>
                        <CardText>Verifique o saldo de seus cartões e recarregue-os</CardText>
                        <ButtonConteiner>
                            <Button Text="Visualizar" onClick={
                                () => window.location.href = "/recarregar"
                            }/>
                        </ButtonConteiner>
                    </Card>
                    <Card>
                        <CardLogo src={CLogo}/>
                        <CardTitle>Conta</CardTitle>
                        <CardText>Edite e visualize as informações do seu perfil</CardText>
                        <ButtonConteiner>
                            <Button Text="Editar Informações"/>
                        </ButtonConteiner>
                    </Card>
                    <Card>
                        <CardLogo src={CLogo}/>
                        <CardTitle>Suporte</CardTitle>
                        <CardText>Precisa de ajuda? Nos envie um email!</CardText>
                        <ButtonConteiner>
                            <Button Text="Suporte"/>
                        </ButtonConteiner>
                    </Card>
                </CardsContainer>
            </MainContainer>
        </div>
    );
}