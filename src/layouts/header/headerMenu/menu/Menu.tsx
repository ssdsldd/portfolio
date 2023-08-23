import {S} from "../HeaderMenu_Style";

const menuItems = [
    {
        name: 'Home',
        href: "home"
    },
    {
        name: 'Skills',
        href: "skills"
    },
    {
        name: 'Works',
        href: "works"
    },
    {
        name: 'Testimony',
        href: "testimony"
    },
    {
        name: 'Contact',
        href: "contact"
    },

];

export const Menu: React.FC = () => {
    return (
        <S.MenuList>
            {
                menuItems.map((item, index) => {
                    return (
                        <S.MenuItem key={index}>
                            <S.MenuLink 
                                to={item.href}
                                smooth={true}>
                                {item.name}
                                <S.Mask>
                                    <span>{item.name}</span>
                                </S.Mask>
                                <S.Mask>
                                    <span>{item.name}</span>
                                </S.Mask>
                            </S.MenuLink>
                        </S.MenuItem>
                    )
                })
            }
        </S.MenuList>
    )
}

