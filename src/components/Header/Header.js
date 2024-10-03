import React from "react";
import { HeaderContainer, HeaderTitle, HeaderItens, ItensContainer, Image} from "./HeaderStyle";

const Header = ({Item1, Item2, Title, Item3, Item4}) => {
    return (
        <div>
            <HeaderContainer>
                <ItensContainer>
                <HeaderItens>{Item1}</HeaderItens>
                <HeaderItens>{Item2}</HeaderItens>
                </ItensContainer>
                    <Image src={Title} alt="Logo" onClick={
                        () => window.location.href = "/"
                    }/>
                <ItensContainer>
                <HeaderItens>{Item3}</HeaderItens>
                <HeaderItens>{Item4}</HeaderItens>
                </ItensContainer>
            </HeaderContainer>
        </div>
    );
}

export default Header;