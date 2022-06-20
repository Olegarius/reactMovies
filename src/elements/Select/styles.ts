import styled from "styled-components";
import {colors} from "const";
import ReactSelectBase from 'react-select';

type Props = {
    className?: any;
};

const base = `
    background-color: ${colors.color_grey};
    min-height: 57px;
    margin-top: 13px;
    border: 0;
    color: ${colors.color_white};
    border: 0;
`;

export const ReactSelect = styled(ReactSelectBase)`
    & > div {
        ${base}
    }
    & > div:hover {
        ${base}
    }

    &:focus-visible {
        outline: none;
        box-shadow: none;
        border: 0;
    }
    ${(props: Props) => props.className};
`;

export const Title = styled.div`
    color: ${colors.color_red};
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 30px;
`;

export const DownIcon = styled.img `
    margin-right: 10px;
`;

export const Wrapper = styled.div``;