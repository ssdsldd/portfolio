import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledFlexWrapper direction="column" align="center">
                <FooterName>Eldar</FooterName>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="instagram" iconWidth="21" iconHeight="21" iconViewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="telegram" iconWidth="21" iconHeight="21" iconViewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="vk" iconWidth="21" iconHeight="21" iconViewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" iconWidth="21" iconHeight="21" iconViewBox="0 0 21 21"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <SocialCopyright>© 2023 Eldar Kerimov, All Rights Reserved.</SocialCopyright>
            </StyledFlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #252527;
`

const FooterName = styled.h4`
    
`

const SocialList = styled.ul`
    display: flex;
    padding: 0;
    gap: 20px;
`

const SocialItem = styled.li`
   list-style: none;
`

const SocialLink = styled.a`
   
`

const SocialCopyright = styled.span`
   
`