import styled from "styled-components";
import {colors} from "const";
import CoreForm from 'elements/Form';

export const WrapperContext = styled.ul`
    position: absolute;
    right: 0;
    top: 0;
`;

export const Form = styled(CoreForm)`
    width: auto;
    position: relative;
    background-color: #232323;
    color: #FFFFFF;
    padding: 63px 82px 70px 82px;
`;

export const Wrapper = styled.div`
    ${Form};
`;

export const Close = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
`;

export const Title = styled.div`
    font-weight: 300;
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

type FilterItemProps = {
    type?: string;
};
export const Content = styled.div`
    margin-top: ${
        (props: FilterItemProps) => props.type === "edit" ?
            "7px" :
            "37px;"
    };
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;

export const ConfirmDelete = styled.div`
    text-align: center;
`;

export const ButtonWrapper = styled.div`
    margin-top: 52px;
    display: flex;
    justify-content: right;
`;

export const Button = `
    text-transform: uppercase;
    margin-left: 13px;
`;

export const InputWrapper = `
    flex-grow: 1;
    margin-right: 30px;
`;

export const TitleDateWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const InputDate = `
    width: 301px;
    height: 57px;
    background-color: ${colors.color_dark_grey};
    border-radius: 4px;
    margin-top: 13px;

    & input {
        color: ${colors.color_white};
    }

    & > div {
        padding: 0 17px;
        border: 0;
    }
`;

export const Textarea = `
    padding: 18px 20px;
    border: 0;
    resize: none;
`;
