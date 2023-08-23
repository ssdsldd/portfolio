import React from "react";
import profilePhoto from '../../../assets/images/1.jpg'
import { Container } from "../../../components/Container";
import { S } from "./Main_Styled";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.StyledMain id="home">
            <Container>
                <StyledFlexWrapper justify="space-around" align="center" wrap="wrap">
                    <div>
                        <S.SubTitle>Hi There</S.SubTitle>
                        <S.Name>I am <span>Kerimov Eldar</span></S.Name>
                        <S.Title>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                        </S.Title>
                    </div>
                    <S.PhotoBox>
                        <S.Photo src={profilePhoto}></S.Photo>
                    </S.PhotoBox>
                </StyledFlexWrapper>
            </Container>
        </S.StyledMain>
    )
}

