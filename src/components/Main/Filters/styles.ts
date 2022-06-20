import styled from "styled-components";
import {colors} from "const";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid ${colors.color_grey};
`;

export const FilterWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    white-space: nowrap;
`;

type FilterItemProps = {
    active?: string;
};
export const FilterItem = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 64px;
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 30px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: ${
        (props: FilterItemProps) => props.active ?
            `4px solid ${colors.color_red}` :
            "none"
    };
`;

export const OrderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    width: 260px;
    position: relative;
`;

export const OrderTitle = styled.div`
    white-space: nowrap;
    color: ${colors.color_grey};
`;

export const OrderSelectWrapper = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
`;

export const OrderSelectDownImg = styled.img`
    margin-left: 13px;
    margin-top: 4px;
    text-align: right;
`;

export const SelectedOrderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OrderList = styled.div``;
export const OrderListItem = styled.div``;
