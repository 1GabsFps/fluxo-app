import React, { useState, useEffect } from "react";
import { HeaderContainer, HeaderItens, ItensContainer, Image, MobileMenu, CenteredImageContainer } from "./HeaderStyle";

const Header = ({ Item1, Item2, Title, Item3, Item4, Link1, Link2, Link3, Link4 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => {
        if (hasItems) {
            setIsMenuOpen(!isMenuOpen);
        } else {
            window.location.href = "/";
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const hasItems = Item1 || Item2 || Item3 || Item4;

    return (
        <div>
            <HeaderContainer>
                {!isMobile && (
                    <>
                        {hasItems ? (
                            <>
                                <ItensContainer>
                                    {Item1 && <HeaderItens onClick={() => window.location.href = Link1}>{Item1}</HeaderItens>}
                                    {Item2 && <HeaderItens onClick={() => window.location.href = Link2}>{Item2}</HeaderItens>}
                                </ItensContainer>
                                <Image src={Title} alt="Logo" onClick={() => window.location.href = "/"}/>
                                <ItensContainer>
                                    {Item3 && <HeaderItens onClick={() => window.location.href = Link3}>{Item3}</HeaderItens>}
                                    {Item4 && <HeaderItens onClick={() => window.location.href = Link4}>{Item4}</HeaderItens>}
                                </ItensContainer>
                            </>
                        ) : (
                            <CenteredImageContainer>
                                <Image src={Title} alt="Logo" onClick={() => window.location.href = "/"}/>
                            </CenteredImageContainer>
                        )}
                    </>
                )}
                {isMobile && (
                    <Image src={Title} alt="Logo" onClick={toggleMenu}/>
                )}
            </HeaderContainer>
            {isMobile && hasItems && (
                <MobileMenu isOpen={isMenuOpen}>
                    {Item1 && <HeaderItens onClick={() => { window.location.href = Link1; toggleMenu(); }}>{Item1}</HeaderItens>}
                    {Item2 && <HeaderItens onClick={() => { window.location.href = Link2; toggleMenu(); }}>{Item2}</HeaderItens>}
                    {Item3 && <HeaderItens onClick={() => { window.location.href = Link3; toggleMenu(); }}>{Item3}</HeaderItens>}
                    {Item4 && <HeaderItens onClick={() => { window.location.href = Link4; toggleMenu(); }}>{Item4}</HeaderItens>}
                </MobileMenu>
            )}
        </div>
    );
}

export default Header;
