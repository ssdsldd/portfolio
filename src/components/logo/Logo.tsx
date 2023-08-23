import React from "react";
import iconSprite from '../../assets/images/icons-sprite.svg';
import { Icon } from "../icon/Icon";
import { animateScroll as scroll} from 'react-scroll'



export const Logo: React.FC = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <Icon  iconId = {'react'}/>
        </a>
    )
}