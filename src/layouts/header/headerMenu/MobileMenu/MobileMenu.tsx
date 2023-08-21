import React from "react";
import { Menu } from "../menu/Menu";
import {S} from "../HeaderMenu_Style";

export const MobileMenu: React.FC<{items: Array<string>}> = (props: {items: Array<string>}) => {
    return (
            <S.MobileNav>
                <S.MenuButton isOpen = {true}>
                    <span></span>
                </S.MenuButton>
                <S.MenuWrapp isOpen = {true}>
                    <Menu items={props.items} />
                </S.MenuWrapp>
            </S.MobileNav>
    )
}


