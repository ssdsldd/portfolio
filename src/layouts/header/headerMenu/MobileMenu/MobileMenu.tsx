import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import {S} from "../HeaderMenu_Style";

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onButtonClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
            <S.MobileNav>
                <S.MenuButton isOpen = {menuIsOpen} onClick={onButtonClick}>
                    <span></span>
                </S.MenuButton>
                <S.MenuWrapp isOpen = {menuIsOpen}>
                    <Menu/>
                </S.MenuWrapp>
            </S.MobileNav>
    )
}


