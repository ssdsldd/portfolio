import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Button } from "../../../components/Button";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <StyledFlexWrapper direction="column" align="center">
                <StyledTitle>I Am Available For Freelance</StyledTitle>
                <Button>Hire me</Button>
            </StyledFlexWrapper>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    background-color: #1F1F20;
`