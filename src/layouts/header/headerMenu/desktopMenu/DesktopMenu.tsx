import React from "react";
import { Menu } from "../menu/Menu";
import {S} from "../HeaderMenu_Style";

export const DesktopMenu: React.FC<{items: Array<string>}> = (props: {items: Array<string>}) => {
    return (
        <S.DesktopNav>
            <Menu items={props.items} />
        </S.DesktopNav>
    )
}




