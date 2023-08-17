import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <WorkImage src={props.src}/>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <WorkLink>DEMO</WorkLink>
            <WorkLink>CODE</WorkLink>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: #1F1F20;
    max-width: 540px;
    width: 100%;
    a{
        color: #fff;
    }
`

const WorkImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkTitle = styled.h3`

`

const WorkText = styled.p`
    
`

const WorkLink = styled.a`
    
`
