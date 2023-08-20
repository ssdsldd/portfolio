import { theme } from "./Theme"

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    Fmax?: number,
    Fmin?: number,
    letterSpacing?: number
}

export const font = (props: FontPropsType) => `
    font-family: ${props.family || 'Poppins'};
    font-weight: ${props.weight || 400};
    color: ${props.color || theme.color.font};
    letter-spacing: ${props.letterSpacing || 0}px;
    font-size: calc((100vw - 360px) / (1440 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);
`