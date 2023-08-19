import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "../../components/menu/HeaderMenu";
import { theme } from "../../styles/Theme";

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledFlexWrapper align="center" justify="space-between">
                    <Logo/>
                    <HeaderMenu items = {menuItems}/>
                </StyledFlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: ${theme.color.secondaryBg};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    z-index: 9999;
`