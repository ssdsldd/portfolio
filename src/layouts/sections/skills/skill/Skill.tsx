import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { StyledFlexWrapper } from "../../../../components/FlexWrapper";

type SkillsPropsType = {
    iconId: string
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            <StyledFlexWrapper direction="column" align="center">
                <IconBox>
                    <Icon iconId={props.iconId}/>   
                </IconBox>
                <StyledSkillTitle>{props.skillTitle}</StyledSkillTitle>
                <StyledSkillText>{props.skillText}</StyledSkillText>
            </StyledFlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const StyledSkillTitle = styled.h3`
    text-transform: uppercase;
    margin: 70px 0 15px;
`

const StyledSkillText = styled.p`
    text-align: center;
`

export const IconBox = styled.div`
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.10);
        transform: rotate(45deg) translateX(-25%);
    }
`