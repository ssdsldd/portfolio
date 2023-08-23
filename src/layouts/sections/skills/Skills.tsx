import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";


const skillItems = [
       {
              iconId: "html",
              skillTitle: "HTML5",
              skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "css",
              skillTitle: "CSS3",
              skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "react",
              skillTitle: "REACT",
              skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "ts",
              skillTitle: "TYPESCRIPT",
              skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "sc",
              skillTitle: "STYLED COMPONENT",
              skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
       {
              iconId: "web",
              skillTitle: "WEB DESIGN",
              skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
       },
]

export const Skills: React.FC = () => {
    return (
        <StyledSkills id="skills">
              <Container>
                     <StyledTitle>My Skills</StyledTitle>
                     <StyledFlexWrapper justify="space-between" wrap="wrap">
                            {skillItems.map((skill, index) => {
                                   return(
                                          <Skill iconId={skill.iconId} key={index}
                                          skillTitle={skill.skillTitle}
                                          skillText={skill.skillText}/>
                                   )
                            })}
                     </StyledFlexWrapper>
              </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`

`