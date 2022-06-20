import styled from "styled-components";
import {colors} from "const";

type Props = {
    className?: any;
};

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