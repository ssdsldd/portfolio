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
    ul{
        display: flex;
        list-style: none;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const TabMenuList = styled.ul`

`

const TabMenuItem = styled.li`
    
`

