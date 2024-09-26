import { ReactComponent as Flogo } from "../../img/Flogo.svg";
import { Card, CardLogo } from "../../components/CartaoBus/CBusStyle";

export function CartaoBus({Cor}) {
    return (
        <Card>
            <Flogo style={{
                width: "200px",
                height: "200px",
                fill: Cor
            }} />
        </Card>
    );
}