import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import profilePhoto from '../../../assets/images/1.jpg'
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <StyledFlexWrapper justify="space-between" align="center">
                    <div>
                        <SubTitle>Hi There</SubTitle>
                        <Name>I am <span>Kerimov Eldar</span></Name>
                        <Title>A Web Developer.</Title>
                    </div>
                    <PhotoBox>
                        <Photo src={profilePhoto}></Photo>
                    </PhotoBox>
                </StyledFlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    object-fit: cover;
    width: 350px;
    height: 430px;
`

const SubTitle = styled.span`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2.5px;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 0;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            z-index: -1;
            width: 100%;
            height: 20px;
            background-color: ${theme.color.accent};
        }
    }
`

const Title = styled.h1`
    font-size: 27px;
    font-weight: 400;
`

const PhotoBox = styled.div`
    position: relative;
    z-index: 0;
    &::before{
        content: '';
        top: -24px;
        right: -34px;
        z-index: -1;
        width: 360px;
        height: 470px;
        position: absolute;
        border: 5px solid ${theme.color.accent};
    }
`