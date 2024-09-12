import React from "react";
import { HeaderContainer, HeaderTitle, HeaderItens, ItensContainer} from "./HeaderStyle";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <ItensContainer>
                <HeaderItens>item 1</HeaderItens>
                <HeaderItens>item 2</HeaderItens>
                </ItensContainer>
                <HeaderTitle>Header</HeaderTitle>
                <ItensContainer>
                <HeaderItens>item 3</HeaderItens>
                <HeaderItens>item 4</HeaderItens>
                </ItensContainer>
            </HeaderContainer>
        </div>
    );
}

export default Header;