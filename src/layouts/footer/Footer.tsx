import React from "react";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Footer_Style";

const socialItems = [
    {
        iconId:"instagram"
    },
    {
        iconId:"telegram"
    },
    {
        iconId:"vk"
    },
    {
        iconId:"linkedin"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <StyledFlexWrapper direction="column" align="center">
                <S.FooterName>Eldar</S.FooterName>
                <S.SocialList>
                    {socialItems.map((item,index) => {
                        return(
                            <S.SocialItem>
                                <S.SocialLink>
                                    <Icon key = {index} iconId={item.iconId} iconWidth="21" iconHeight="21" iconViewBox="0 0 21 21"/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.SocialCopyright>© 2023 Eldar Kerimov, All Rights Reserved.</S.SocialCopyright>
            </StyledFlexWrapper>
        </S.StyledFooter>
    )
}

