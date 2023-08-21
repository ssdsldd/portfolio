import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../../../components/StyledTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import workImage1 from "../../../assets/images/wokrs-1.webp"
import workImage2 from "../../../assets/images/wokrs-2.webp"
import { TabMenu } from "./tabMenu/TabMenu";
import { Container } from "../../../components/Container";
import { S } from "./work/Work_Style";


const menuItems = ['ALL', 'landing page', 'React', 'spa'];

const workItems = [
    {
        src: workImage1,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },  
    {
        src: workImage2,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
]

export const Works: React.FC = () => {
    return (
        <S.StyledWorks>
            <Container>
                <StyledTitle>My Works</StyledTitle>
                <TabMenu items={menuItems}/>
                <StyledFlexWrapper justify="space-between" align="flex-start" wrap="wrap">
                    {workItems.map((work, index) => {
                        return (
                            <Work src={work.src}
                            title={work.title}
                            text={work.text}
                            key={index}/>
                        )
                    })}
                </StyledFlexWrapper>
            </Container>
        </S.StyledWorks>
    )
}

