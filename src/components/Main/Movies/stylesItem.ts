import styled from "styled-components";
import {colors} from "const";

export const Wrapper = styled.div`
    width: 323px;
    cursor: pointer;
    margin-bottom: 50px;
    position: relative;
`;

export const Image = styled.img`
    height: 486px;
    width: 323px;

    &:hover {
        opacity: 0.8;
    }
`;


export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${colors.color_white};
    opacity: 0.7;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
`;

export const Year = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid  rgba(255, 255, 255, .5);
    border-radius: 4px;
    width: 66px;
    height: 26px;
    font-weight: 500;
    font-size: 14px;
`;

export const Genre = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: ${colors.color_white};
    opacity: 0.5;
`;
