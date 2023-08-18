import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Button } from "../../../components/Button";


export const Contact = () => {
    return (
        <StyledContact>
            <StyledTitle>Contact</StyledTitle>
            <StyledForm>
                <StyledField placeholder="Name"/>
                <StyledField placeholder="Subject"/>
                <StyledField placeholder="Message" as = {'textarea'}/>
                <Button>Send message</Button>
            </StyledForm>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    padding: 50px 0;
`

const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledField = styled.input`

`