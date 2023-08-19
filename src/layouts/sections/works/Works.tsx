import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import workImage1 from "../../../assets/images/wokrs-1.webp"
import workImage2 from "../../../assets/images/wokrs-2.webp"
import { TabMenu } from "./tabMenu/TabMenu";
import { Container } from "../../../components/Container";

const menuItems = ['ALL', 'landing page', 'React', 'spa'];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <StyledTitle>My Works</StyledTitle>
                <TabMenu items={menuItems}/>
                <StyledFlexWrapper justify="space-between" align="flex-start">
                    <Work src={workImage1}
                        title="Social Network"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <Work src={workImage2}
                        title="Timer"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                </StyledFlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    a{
        color: #fff;
    }
`