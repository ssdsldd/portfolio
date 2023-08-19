import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    width: 170px;
    color: ${theme.color.font};
    height: 32px; 
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase; 
    position: relative; 
    z-index: 1;
    cursor: pointer;
    &::before{
        z-index: -1;
        content: '';
        position: absolute;
        width: 50%;
        height: 10px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${theme.color.accent};
    }

    &:hover{
        &::before{
            width: 100%;
            height: 100%;
        }
    }
`