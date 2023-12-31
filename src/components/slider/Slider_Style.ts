import styled from "styled-components"
import { theme } from "../../styles/Theme"

const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    
`


const SlideName = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 22px 0 30px;
    display: inline-block;
`

const SlideText = styled.p`
    
`

const Pagination = styled.div`
    span {
        display: inline-block;
        background-color: #FFFFFF80;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        &:not(:last-child){
            margin-right: 10px;
        }

        &.active{
            width: 20px;
            border-radius: 7px;
            background-color: ${theme.color.accent}
        }
    }
`

export const S = {
    Pagination,
    SlideText,
    SlideName,
    Slide,
    StyledSlider
}