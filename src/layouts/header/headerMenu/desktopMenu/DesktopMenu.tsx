import React from "react";
import { Menu } from "../menu/Menu";
import {S} from "../HeaderMenu_Style";

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopNav>
            <Menu />
        </S.DesktopNav>
    )
}




