import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillsPropsType = {
    iconId: string
    skillTitle: string
    skillText: string
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledSkillTitle>{props.skillTitle}</StyledSkillTitle>
            <StyledSkillText>{props.skillText}</StyledSkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 30%;
`

const StyledSkillTitle = styled.h3`
    
`

const StyledSkillText = styled.p`
    
`