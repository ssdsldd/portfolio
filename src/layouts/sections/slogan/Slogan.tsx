import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Button } from "../../../components/Button";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>   
                <StyledFlexWrapper direction="column" align="center">
                    <StyledTitle>I Am Available For Freelance</StyledTitle>
                    <Button>Hire me</Button>
                </StyledFlexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
`