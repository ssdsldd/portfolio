import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import {S} from "./Header_Styles";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/MobileMenu/MobileMenu";

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <StyledFlexWrapper align="center" justify="space-between">
                    <Logo/>
                    <DesktopMenu items = {menuItems}/>
                    <MobileMenu items={menuItems}/>
                </StyledFlexWrapper>
            </Container>
        </S.Header>
    )
}

