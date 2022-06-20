import styled from "styled-components";
import {colors} from "const";

export const Wrapper = styled.div`
    background-color: ${colors.color_white};
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    padding: 54px;
    background-color: ${colors.color_grey};
    position: absolute;
    min-height: calc(100% - 108px);
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${colors.color_white};
`;
