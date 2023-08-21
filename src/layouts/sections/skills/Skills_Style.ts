import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 62px 20px 40px;
    @media ${theme.media.mobile}{
        padding: 62px 0px 40px;
    }
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

export const S = {
    StyledSkillText,
    StyledSkillTitle,
    StyledSkill
}