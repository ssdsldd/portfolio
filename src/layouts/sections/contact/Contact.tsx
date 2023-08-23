import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Style";


export const Contact: React.FC = () => {
    return (
        <StyledContact id="contact">
            <Container>
                <StyledTitle>Contact</StyledTitle>
                <S.StyledForm>
                    <S.StyledField placeholder="Name"/>
                    <S.StyledField placeholder="Subject"/>
                    <S.StyledField placeholder="Message" as = {'textarea'}/>
                    <Button>Send message</Button>
                </S.StyledForm>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`
`

