import styled from "styled-components";
import {colors} from "const";

type Props = {
    className?: any;
};

const Base = `
    background: ${colors.color_dark_grey};
    mix-blend-mode: normal;
    opacity: 0.8;
    border-radius: 4px;
    height: 57px;
    width: 100%;
    color: ${colors.color_white};
    font-size: 20px;
    font-weight: 400;
    margin-top: 13px;
    padding: 0 18px;

    &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

export const Textarea = styled.textarea`
    ${Base}
    height: 197px;
    ${(props: Props) => props.className};
`;

export const Input = styled.input`
    ${Base};
    ${(props: Props) => props.className};
`;

export const Title = styled.div`
    color: ${colors.color_red};
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 30px;
`;

export const Wrapper = styled.div`
    ${(props: Props) => props.className};
`;