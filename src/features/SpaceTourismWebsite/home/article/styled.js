import styled from "styled-components";

export const HomeArticle = styled.article`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    height: 720px;
    padding: 130px 0 50px 0;
`;

export const TextSection = styled.section`
    width: 650px;
    padding-right: 70px;
    padding-bottom: 50px;
    padding-left: 100px;
`;

export const SmallHeader = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow Condensed';
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
`;

export const BigHeader = styled.p`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    margin: 0;
`;

export const Content = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;
`;

export const HomeButton = styled.button`
    display:block;
    border-radius: 50%;
    border: 88px transparent;
    letter-spacing: 2px;
    overflow: visible;
    padding: 65px;
    margin-right: 110px;
    background-color: #ffffff00;

    &:hover{
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);
    }
`;

export const BtnSpan = styled.span`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 50%;
    width: 274px;
    height: 274px;
    font-family: 'Bellefair';
    font-size: 32px;
    text-transform: uppercase;
`;