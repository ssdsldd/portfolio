import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

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

export const S = {
    FooterName,
    SocialCopyright,
    SocialLink,
    SocialItem,
    SocialList,
    StyledFooter
}