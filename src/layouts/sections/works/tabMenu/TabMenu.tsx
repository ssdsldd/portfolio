import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { MenuLink } from "../WorksLink";

export const TabMenu = (props: {items: Array<string>}) => {
    return (
        <StyledNav>
            <TabMenuList>
                {
                    props.items.map((item, index) => {
                        return (
                            <TabMenuItem key={index}><MenuLink href="#">{item}</MenuLink></TabMenuItem>
                        )
                    })
                }
            </TabMenuList>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
    margin-bottom: 40px;
    ul{
        display: flex;
        gap: 20px;
        list-style: none;
        justify-content: center;
    }
`

const TabMenuList = styled.ul`

`

const TabMenuItem = styled.li`
    
`

