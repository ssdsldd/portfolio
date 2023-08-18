import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { StyledFlexWrapper } from "../../components/FlexWrapper";

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledFlexWrapper align="center" justify="space-between">
                    <Logo/>
                    <Menu items = {menuItems}/>
                </StyledFlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    a{
        color: #111;
    }
    
`