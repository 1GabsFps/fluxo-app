import { ReactComponent as Flogo } from "../../img/Flogo.svg";
import { ReactComponent as Txtlogo } from "../../img/FlogoTxt.svg";
import { Card, CardLogo } from "../../components/CartaoBus/CBusStyle";
import { CardContainer, CardText } from "../../components/CartaoBus/CBusStyle";

export function CartaoBus({ id, classe, saldo }) {
    let Cor;
    switch (classe) {
        case "Normal":
            Cor = "#98633D";
            break;
        case "Estudante":
            Cor = "#6361DC";
            break;
        case "Especial":
            Cor = "#4EC23B";
            break;
        case "Idoso":
            Cor = "#5F6669";
            break;
        default:
            Cor = "#000000"; // Cor padrão
    }

    return (
        <Card>
            <Flogo style={{
                width: "100px",
                height: "100px",
                fill: Cor,
                margin: "10px"
            }} />
            <CardContainer>
                
            <CardText>
                Cartão {classe}
            </CardText>
            <CardText>
                Saldo R$: {saldo}
            </CardText>
            </CardContainer>
        </Card>
    );
}