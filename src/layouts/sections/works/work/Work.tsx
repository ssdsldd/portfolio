import React from "react";
import styled from "styled-components";
import { MenuLink } from "../WorksLink";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageBox>
                <WorkImage src={props.src}/>
                <Button>view project</Button>
            </ImageBox>
            <WorkBox>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkText>{props.text}</WorkText>
                <MenuLink>DEMO</MenuLink>
                <MenuLink>CODE</MenuLink>
            </WorkBox>
        </StyledWork>
    )
}

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
