import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { StyledFlexWrapper } from "../../../../components/FlexWrapper";
import { IconBox, S } from "../Skills_Style";


type SkillsPropsType = {
    iconId: string
    skillTitle: string
    skillText: string
}

export const Skill: React.FC<SkillsPropsType> = (props: SkillsPropsType) => {
    return (
        <S.StyledSkill>
            <StyledFlexWrapper direction="column" align="center">
                <IconBox>
                    <Icon iconId={props.iconId}/>   
                </IconBox>
                <S.StyledSkillTitle>{props.skillTitle}</S.StyledSkillTitle>
                <S.StyledSkillText>{props.skillText}</S.StyledSkillText>
            </StyledFlexWrapper>
        </S.StyledSkill>
    )
}


