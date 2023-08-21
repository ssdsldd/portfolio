import React from "react";
import { S } from "./Slider_Style";

export const Slider: React.FC = () => {
    return (
        <S.StyledSlider>
            <S.Slide>
                <S.SlideText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.SlideText>
                <S.SlideName>@ivan ivanow</S.SlideName>
            </S.Slide>
            <S.Pagination>
                <span className="active"></span>
                <span></span>
                <span></span>
            </S.Pagination>
        </S.StyledSlider>
    )
}


