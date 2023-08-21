import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
    background-color: ${theme.color.secondaryBg};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    z-index: 9999;
`

export const S = {
    Header
}