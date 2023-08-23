import React from "react";
import { S } from "./Slider_Style";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'

type SlidePropsType = {
    text: string,
    name: string
}

const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
    return(
        <S.Slide>
            <S.SlideText>{props.text}</S.SlideText>
            <S.SlideName>@{props.name}</S.SlideName>
        </S.Slide>

    )
}

const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} name = {"ivan ivanow"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} name = {"petr petrov"}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} name = {"egor egorov"}/>,
];

export const Slider: React.FC = () => (
    <S.StyledSlider>
        <AliceCarousel mouseTracking items={items}/>
    </S.StyledSlider>
);



