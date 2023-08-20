import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const StyledTitle = styled.h2`
    text-align: center;
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30, letterSpacing: 5})}
    margin-bottom: 90px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 55px;
        height: 1px;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${theme.color.accent};
        @media ${theme.media.mobile}{
            bottom: -24px;
        }
    }
    @media ${theme.media.mobile}{
            margin-bottom: 75px;
        }
`