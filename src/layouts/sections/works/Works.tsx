import React, { useState } from "react";
import { StyledTitle } from "../../../components/StyledTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import workImage1 from "../../../assets/images/wokrs-1.webp"
import workImage2 from "../../../assets/images/wokrs-2.webp"
import { TabMenu } from "./tabMenu/TabMenu";
import { Container } from "../../../components/Container";
import { S } from "./work/Work_Style";


const tabItems: Array<{status: "all" | "landing" | "react" | "spa", title: string}> = [
    {
        title: 'ALL',
        status: "all"
    },
    {
        title: 'landing page',
        status: "landing"
    },
    {
        title: 'React',
        status: "react"
    },
    {
        title: 'spa',
        status: "spa"
    }
]

const workItems = [
    {
        src: workImage1,
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    },  
    {
        src: workImage2,
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react"
    }
]

export const Works: React.FC = () => {

    const[currentStatus, setcurrentStatus] = useState("all");
    let currentWorks = workItems;

    if (currentStatus === "all"){
        currentWorks = workItems.filter(work => work)
    }

    if (currentStatus === "react"){
        currentWorks = workItems.filter(work => work.type === "react")
    }

    if (currentStatus === "landing"){
        currentWorks = workItems.filter(work => work.type === "lending")
    }

    if (currentStatus === "spa"){
        currentWorks = workItems.filter(work => work.type === "spa")
    }

    function changeStatus (value: "all" | "landing" | "react" | "spa"){
        setcurrentStatus(value);
    }

    return (
        <S.StyledWorks id="works">
            <Container>
                <StyledTitle>My Works</StyledTitle>
                <TabMenu items={tabItems} changeStatus = {changeStatus} currentStatus = {currentStatus}/>
                <StyledFlexWrapper justify="space-between" align="flex-start" wrap="wrap">
                    {currentWorks.map((work, index) => {
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

