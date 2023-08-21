import React from "react";
import iconSprite from '../../assets/images/icons-sprite.svg';
import { Icon } from "../icon/Icon";


export const Logo: React.FC = () => {
    return (
        <a href="#">
            <Icon  iconId = {'react'}/>
        </a>
    )
}