import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"


const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    object-fit: cover;
    width: 350px;
    height: 430px;
    @media ${theme.media.mobile}{
        width: 310px;
        height: 380px;
    }
`

const SubTitle = styled.span`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36, letterSpacing: 2.5})}
    margin: 10px 0;
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            z-index: -1;
            width: 100%;
            height: 20px;
            background-color: ${theme.color.accent};
        }
    }
`

const Title = styled.h1`
    ${font({Fmax: 27, Fmin: 20})}
    p{
        display: none;
    }
`

const PhotoBox = styled.div`
    position: relative;
    z-index: 0;
    &::before{
        content: '';
        top: -24px;
        right: -34px;
        z-index: -1;
        width: 360px;
        height: 470px;
        position: absolute;
        border: 5px solid ${theme.color.accent};
        @media ${theme.media.mobile}{
            width: 314px;
            height: 414px;
            top: -20px;
            right: -20px;
        }
    }
`

export const S = {
    PhotoBox,
    Title,
    Name, 
    SubTitle, 
    Photo, 
    StyledMain
}