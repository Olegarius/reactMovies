import styled from "styled-components";
import {colors} from "const";

export const Wrapper = styled.div`
    width: 100%;
    height: 396px;
    background-color: ${colors.color_black};
    margin-bottom: 10px;
    position: relative;
    z-index:1;
    overflow:hidden;
    text-transform: uppercase;

    &:before {
        z-index:-1;
        position:absolute;
        content: url('images/bg.png');
    }
`;
export const SearchWrapper = styled.div``;

export const LogoWrapper = styled.div`
    margin: 20px 56px;
    display: flex;
    width: calc(100% - 112px);
    justify-content: space-between;
    align-items: center;
`;

export const AddMovie = styled.div`
    cursor: pointer;
    width: 177px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.color_red};
    background: rgba(96, 96, 96, 0.68);
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
`;

export const SearchInput = styled.input`
    background: rgba(50, 50, 50, 0.8);
    mix-blend-mode: normal;
    opacity: 0.7;
    border-radius: 4px;
    width: 713px;
    height: 57px;
    margin: 0 14px 0 50px;
    color: ${colors.color_white};
    font-weight: 500;
    font-size: 20px;
    padding: 0 19px;
`;

export const SearchButton = styled.input`
    width: 233px;
    height: 57px;
    background-color: ${colors.color_red};
    color: ${colors.color_white};
    font-weight: 500;
    font-size: 20px;
`;

export const Title = styled.div`
    font-weight: 300;
    font-size: 40px;
    color: ${colors.color_white};
    margin: 35px 0 35px 50px ;
`;
