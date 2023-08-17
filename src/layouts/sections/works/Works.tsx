import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { Menu } from "../../../components/menu/Menu";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import workImage1 from "../../../assets/images/wokrs-1.webp"
import workImage2 from "../../../assets/images/wokrs-2.webp"

const menuItems = ['ALL', 'landing page', 'React', 'spa'];

export const Works = () => {
    return (
        <StyledWorks>
            <StyledTitle>My Works</StyledTitle>
            <Menu items={menuItems}/>
            <StyledFlexWrapper justify="space-around">
                <Work src={workImage1}
                      title="Social Network"
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <Work src={workImage2}
                      title="Timer"
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            </StyledFlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    background-color: #252527;
    min-height: 100vh;
    a{
        color: #fff;
    }
`