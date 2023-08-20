import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

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
    padding: 40px 0;
    background-color: ${theme.color.primaryBg};
`

const FooterName = styled.h4`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, letterSpacing: 3, Fmax: 22, Fmin: 16})}
`

const SocialList = styled.ul`
    display: flex;
    padding: 0;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`
   list-style: none;
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;   
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.10);  
    color: ${theme.color.accent};

    &:hover{
        color: ${theme.color.primaryBg};
        background-color: ${theme.color.accent};
        transform: translateY(-4px);
    }
`

const SocialCopyright = styled.span`
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
`