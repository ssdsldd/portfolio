import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

export const StyledTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;
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
    }
`