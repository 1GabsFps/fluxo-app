import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderItens, ItensContainer, Image, MobileMenu, CenteredImageContainer } from "./HeaderStyle";

const Header = ({ Item1, Item2, Title, Item3, Item4, Link1, Link2, Link3, Link4 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigate = useNavigate();

    const hasItems = Boolean(Item1 || Item2 || Item3 || Item4);

    const toggleMenu = () => {
        if (hasItems) {
            setIsMenuOpen(prev => !prev);
        } else {
            navigate("/");
        }
    };

    const handleNavigate = (path) => {
        if (!path) return;
        setIsMenuOpen(false);
        if (path.startsWith("http")) {
            window.location.href = path;
        } else {
            navigate(path);
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

    return (
        <div>
            <HeaderContainer>
                {!isMobile && (
                    <>
                        {hasItems ? (
                            <>
                                <ItensContainer aria-label="Navegação primária">
                                    {Item1 && <HeaderItens type="button" onClick={() => handleNavigate(Link1)}>{Item1}</HeaderItens>}
                                    {Item2 && <HeaderItens type="button" onClick={() => handleNavigate(Link2)}>{Item2}</HeaderItens>}
                                </ItensContainer>
                                <Image 
                                    src={Title} 
                                    alt="Logo Fluxo" 
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleNavigate("/")}
                                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate("/")}
                                />
                                <ItensContainer aria-label="Navegação secundária">
                                    {Item3 && <HeaderItens type="button" onClick={() => handleNavigate(Link3)}>{Item3}</HeaderItens>}
                                    {Item4 && <HeaderItens type="button" onClick={() => handleNavigate(Link4)}>{Item4}</HeaderItens>}
                                </ItensContainer>
                            </>
                        ) : (
                            <CenteredImageContainer>
                                <Image 
                                    src={Title} 
                                    alt="Logo Fluxo" 
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleNavigate("/")}
                                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate("/")}
                                />
                            </CenteredImageContainer>
                        )}
                    </>
                )}
                {isMobile && (
                    <Image 
                        src={Title} 
                        alt="Logo Fluxo - Alternar Menu" 
                        role="button"
                        tabIndex={0}
                        onClick={toggleMenu}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
                    />
                )}
            </HeaderContainer>
            {isMobile && hasItems && (
                <MobileMenu $isOpen={isMenuOpen} aria-label="Menu móvel">
                    {Item1 && <HeaderItens type="button" onClick={() => handleNavigate(Link1)}>{Item1}</HeaderItens>}
                    {Item2 && <HeaderItens type="button" onClick={() => handleNavigate(Link2)}>{Item2}</HeaderItens>}
                    {Item3 && <HeaderItens type="button" onClick={() => handleNavigate(Link3)}>{Item3}</HeaderItens>}
                    {Item4 && <HeaderItens type="button" onClick={() => handleNavigate(Link4)}>{Item4}</HeaderItens>}
                </MobileMenu>
            )}
        </div>
    );
};

export default Header;
