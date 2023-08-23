import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Icon } from "../../../components/icon/Icon";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Slider } from "../../../components/slider/Slider";
import { Container } from "../../../components/Container";
import { IconBox } from "../skills/Skills_Style";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id="testimony">
            <Container>
                <StyledFlexWrapper direction="column" align="center">
                    <StyledTitle>Testimony</StyledTitle>
                    <IconBox>
                        <Icon iconId="quote"/>
                    </IconBox>
                    <Slider/>
                </StyledFlexWrapper>
            </Container>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    ${IconBox}{
        margin: 32px 0 72px;
    }
`
