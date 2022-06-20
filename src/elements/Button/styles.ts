import styled from "styled-components";
import {colors} from "const";

type Props = {
    className?: any;
    type?: 'submit' | 'reset' | 'button';
};

const types: any = {
    submit: `
        width: 233px;
        height: 57px;
        background-color: ${colors.color_red};
        color: ${colors.color_white};
    `,
    reset: `
        width: 233px;
        height: 57px;
        border: 1.5px solid ${colors.color_red};
        color: ${colors.color_red};
        background-color: transparent;
    `,
    add: `
        width: 177px;
        height: 46px;
        color: ${colors.color_red};
        background: rgba(96, 96, 96, 0.68);
    `,
    base: ``
};

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    border-radius: 4px;
    min-width: 177px;
    min-height: 46px;

    &:focus-visible {
        outline: none;
        box-shadow: none;
    }
    ${(props: Props) => types[props.type ?? "base"]};
    ${(props: Props) => props.className};
`;
