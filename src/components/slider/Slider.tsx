import React from "react";
import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <SlideText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</SlideText>
                <SlideName>@ivan ivanow</SlideName>
            </Slide>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    max-width: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    
`


const SlideName = styled.span`
    
`

const SlideText = styled.p`
    
`

const Pagination = styled.div`
    span {
        display: inline-block;
        background-color: #fff;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 10px;
    }
`
