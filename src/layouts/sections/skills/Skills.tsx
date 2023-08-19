import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
              <Container>
                     <StyledTitle>My Skills</StyledTitle>
                     <StyledFlexWrapper justify="space-between" wrap="wrap">
                            <Skill iconId="html"
                                   skillTitle="HTML5"
                                   skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                            <Skill iconId="css"
                                   skillTitle="CSS3"
                                   skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                            <Skill iconId="react"
                                   skillTitle="REACT"
                                   skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                            <Skill iconId="ts"
                                   skillTitle="TYPESCRIPT"
                                   skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                            <Skill iconId="sc"
                                   skillTitle="STYLED COMPONENTS"
                                   skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                            <Skill iconId="web"
                                   skillTitle="WEB DESIGN"
                                   skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"/>
                     </StyledFlexWrapper>
              </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`

`