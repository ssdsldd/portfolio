import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Icon } from "../../../components/icon/Icon";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Slider } from "../../../components/slider/Slider";
import { IconBox } from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <StyledFlexWrapper direction="column" align="center">
                <StyledTitle>Testimony</StyledTitle>
                <IconBox>
                    <Icon iconId="quote"/>
                </IconBox>
                <Slider/>
            </StyledFlexWrapper>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    ${IconBox}{
        margin: 32px 0 72px;
    }
`
