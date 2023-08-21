import styled from "styled-components"
import { Button } from "../../../../components/Button"
import { theme } from "../../../../styles/Theme"
import { StyledFlexWrapper } from "../../../../components/FlexWrapper"
import { MenuLink } from "../WorksLink"


const StyledWorks = styled.section`
    a{
        color: #fff;
    }
    ${StyledFlexWrapper}{
        gap: 30px;
    }
`

const StyledWork = styled.div`
    background-color: ${theme.color.secondaryBg};
    width: 330px;
    flex-grow: 1;
    a{
        color: #fff;
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const WorkImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkTitle = styled.h3`
    text-transform: capitalize;
`

const WorkText = styled.p`
    margin: 15px 0 20px;
`

const WorkBox = styled.div`
    padding: 25px 20px;
    ${MenuLink}{
        padding: 9px 0;
        cursor: pointer;
        &:not(:last-child){
            margin-right: 20px;
        }
    }
`
const ImageBox = styled.div`
    position: relative;
    &::before{
        content: "";
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(4px);
    }

    &:hover{
        &::before{
            opacity: 1;
        }
        ${Button}{
            opacity: 1;
        }
    }

    ${Button}{
        &::before{
            width: 100%;
            height: 100%;
        }
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        opacity: 0;
    }

    @media ${theme.media.tablet}{
        &::before{
            opacity: 1;
        }
        ${Button}{
            opacity: 1;
        }
    }
`

export const S = {
    ImageBox,
    WorkBox,
    WorkTitle,
    WorkText,
    WorkImage,
    StyledWork,
    StyledWorks
}