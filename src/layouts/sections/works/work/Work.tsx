import React from "react";
import { WorksLink } from "../WorksLink";
import { Button } from "../../../../components/Button";
import { S } from "./Work_Style";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImageBox>
                <S.WorkImage src={props.src}/>
                <Button>view project</Button>
            </S.ImageBox>
            <S.WorkBox>
                <S.WorkTitle>{props.title}</S.WorkTitle>
                <S.WorkText>{props.text}</S.WorkText>
                <WorksLink>DEMO</WorksLink>
                <WorksLink>CODE</WorksLink>
            </S.WorkBox>
        </S.StyledWork>
    )
}


