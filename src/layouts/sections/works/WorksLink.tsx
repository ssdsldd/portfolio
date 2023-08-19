import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const MenuLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 9px 10px;
    position: relative;
    &::before{
        content: "";
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 10px;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${theme.color.accent};
    }

    &:hover{
        &::before{
            opacity: 1;
        }
    }
`