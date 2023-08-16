import React from "react";
import iconSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
    iconId: string,
    iconWidth ? : string,
    iconHeight ? : string,
    iconViewBox ? : string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.iconWidth || '50px'} 
             height={props.iconHeight || '50px'} 
             viewBox={props.iconViewBox || "0 0 50 50"} 
             fill="none">
                <use xlinkHref={ `${iconSprite}#${props.iconId}` } />
        </svg>
    )
}