import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Icon } from "../../../components/icon/Icon";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Slider } from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <StyledFlexWrapper direction="column" align="center">
                <StyledTitle>Testimony</StyledTitle>
                <Icon iconId="quote"/>
                <Slider/>
            </StyledFlexWrapper>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    background-color: #1F1F20;
`
