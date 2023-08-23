import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"
import { Link } from "react-scroll"

// MENU
const MenuList = styled.ul`
    margin: 0;
    padding: 0;
    @media ${theme.media.tablet}{
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
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
`

const MenuLink = styled(Link)`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: transparent;

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
        transition: ${theme.animation.transition};
    }
`

//Desktop
const DesktopNav = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        list-style: none;
    }
    @media ${theme.media.tablet}{
        display: none;
    }
`

//Mobile
const MenuWrapp = styled.div<{isOpen: boolean}>`
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateY(-100%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.animation.transition};
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    background: rgba(31, 31, 32, 0.90);

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);
    `}
`

const MobileNav = styled.nav`
    display: none;
    @media ${theme.media.tablet}{
        display: block;
    }
`

const MenuButton = styled.div<{isOpen: boolean}>`

    position: fixed;
    z-index: 9999;
    width: 100px;
    height: 100px;
    right: 0;
    top: -30px;
    span{
        position: absolute;
        bottom: 30px;
        left: 15px;
        width: 36px;
        height: 2px;
        background-color: ${theme.color.font};
        &::before{
            content: '';
            position: absolute;
            display: block;
            transform: translateY(-9px);
            width: 36px;
            height: 2px;
            background-color: ${theme.color.font};
        }
        &::after{
            content: '';
            position: absolute;
            display: block;
            transform: translateY(9px) translateX(12px);
            width: 24px;
            height: 2px;
            background-color: ${theme.color.font};
        }

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255,255,255,0);
            &::before{
                transform: rotate(-45deg) translateY(0);
            }
            &::after{
                transform: rotate(45deg)  translateY(0);
                width: 36px;
            }
        `}
    }
`

export const S  = {
    //Menu
    MenuItem,
    Mask,
    MenuLink,
    MenuList,

    //Desktop
    DesktopNav,

    //Mobile
    MenuWrapp,
    MobileNav,
    MenuButton
}