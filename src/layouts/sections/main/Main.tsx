import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import profilePhoto from '../../../assets/images/profile-photo.webp'

export const Main = () => {
    return (
        <StyledMain>
            <StyledFlexWrapper justify="space-around" align="center">
                <div>
                    <span>Hi There</span>
                    <h2>I am Kerimov Eldar</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={profilePhoto}></Photo>
            </StyledFlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    background-color: #252527;
`

const Photo = styled.img`
    object-fit: cover;
    width: 350px;
    height: 430px;

`