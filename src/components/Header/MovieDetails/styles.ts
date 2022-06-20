import styled from "styled-components";
import {colors} from "const";

export const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: ${colors.color_black};
    padding: 37px 60px 29px 60px;
    margin-bottom: 10px;
    position: relative;
`;

export const Logo = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.color_red};
`;

export const Search = styled.div`
     cursor: pointer;
`;

export const LogoSearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const DescriptionWrapper = styled.div`
    margin-left: 59px;
`;

export const Title = styled.div`
    font-weight: 300;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${colors.color_white};
`;

export const Rating = styled.div`
    width: 60px;
    height: 60px;
    margin-left: 25px;
    color: ${colors.color_white};
    font-weight: 300;
    font-size: 20px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.color_white};
    border-radius: 50px;
`;

export const TitleRatingWrapper = styled.div`
    display: flex;
    margin-bottom: 4px;
`;

export const Image = styled.img`
    height: 486px;
    width: 323px;
`;

export const Genre = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: ${colors.color_white};
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: 30px;
`;

export const Year = styled.div`
    font-weight: 300;
    font-size: 24px;
    color: ${colors.color_red};
    margin-bottom: 30px;
`;
export const Duration = styled(Year)`
    margin-left: 51px;
`;

export const YearDurationWrapper = styled.div`
    display: flex;
`;

export const Description = styled.div`
    font-weight: 300;
    font-size: 20px;
    color: ${colors.color_white};
    mix-blend-mode: normal;
    opacity: 0.5;
`;
