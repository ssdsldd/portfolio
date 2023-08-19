import React from "react";
import styled from "styled-components";

type FlexWrapperPropsType = {
    direction? : string
    align? : string
    justify? : string
    wrap? : string
}

export const StyledFlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'flex-start'};
    flex-wrap:${props => props.wrap || 'nowrap'};
    height: 100%;
`
    