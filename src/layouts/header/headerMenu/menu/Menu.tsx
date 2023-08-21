import {S} from "../HeaderMenu_Style";

export const Menu: React.FC<{items: Array<string>}> = (props: {items: Array<string>}) => {
    return (
        <S.MenuList>
            {
                props.items.map((item, index) => {
                    return (
                        <S.MenuItem key={index}>
                            <S.MenuLink href="#">
                                {item}
                                <S.Mask>
                                    <span>{item}</span>
                                </S.Mask>
                                <S.Mask>
                                    <span>{item}</span>
                                </S.Mask>
                            </S.MenuLink>
                        </S.MenuItem>
                    )
                })
            }
        </S.MenuList>
    )
}

