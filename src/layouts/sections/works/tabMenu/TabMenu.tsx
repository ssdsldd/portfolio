import React from "react";
import styled from "styled-components";
import { WorksLink } from "../WorksLink";

type TabMenuPropsType = {
    items: Array<{status: "all" | "landing" | "react" | "spa", title: string}>,
    changeStatus: (value: "all" | "landing" | "react" | "spa") => void,
    currentStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <StyledNav>
            <TabMenuList>
                {
                    props.items.map((item, index) => {
                        return (
                            <TabMenuItem key={index}>
                                <WorksLink  active = {props.currentStatus === item.status} 
                                            as={"button"} 
                                            onClick = {() => {props.changeStatus(item.status)}}>{item.title}</WorksLink>
                            </TabMenuItem>
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

