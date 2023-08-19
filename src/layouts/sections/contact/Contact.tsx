import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <StyledTitle>Contact</StyledTitle>
                <StyledForm>
                    <StyledField placeholder="Name"/>
                    <StyledField placeholder="Subject"/>
                    <StyledField placeholder="Message" as = {'textarea'}/>
                    <Button>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    textarea{
        height: 155px;
        resize: none;
    }
`

const StyledField = styled.input`
    width: 100%;
    padding: 7px 15px;
    color: #495057;
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    border: 1px solid #4A4A4A;
    background: ${theme.color.secondaryBg}; 
    
    &:focus-visible{
        outline: 1px solid #4A4A4A;
    }
`