import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: {items: Array<string>}) => {
    return (
        <StyledNav>
            <MenuList>
                {
                    props.items.map((item, index) => {
                        return (
                            <MenuItem key={index}>
                                <MenuLink href="#">
                                    {item}
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                </MenuLink>
                            </MenuItem>
                        )
                    })
                }
            </MenuList>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }

    @media ${theme.media.tablet}{
        display: none;
    }
`

const MenuList = styled.ul`
    margin: 0;
    padding: 0;
`



const MenuLink = styled.a`
    
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: transparent;
`
const Mask = styled.span`
    color: ${theme.color.accent};
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    height: 50%;
    overflow-y: hidden;
    & + & {
        top: 50%; 
        span {
            display: inline-block;
            transform: translateY(-61%);
        }
    }
`

const MenuItem = styled.li`
    position: relative;

    &:hover{
        ${Mask}{
            color: ${theme.color.font};
            transform: skewX(15deg) translateX(2px);
            & + ${Mask}{
                transform: skewX(15deg) translateX(-2px);
            }
        }
        &::before{
            transform: scale(1);
        }
    }

    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        height: 1.5px;
        top: 44%;
        left: -10px;
        right: -10px;
        background-color: ${theme.color.accent};
        transform: scale(0);
    }
`