import styled from "styled-components";

export const HomeArticle = styled.article`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    height: 720px;
    padding: 130px 0 50px 0;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 200px 0;
        height: 1024px;
    }
    
    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly; 
        padding: 0;
        margin: 0;
    }
`;

export const TextSection = styled.section`
    width: 650px;
    padding-right: 70px;
    padding-bottom: 50px;
    padding-left: 100px;

    @media (max-width: 768px){
        width: 450px;
        height: 334px;
        padding: 0;
        margin: 65px 0 100px 0;
    }

    @media (max-width: 375px){
        width: 327px;
        padding: 0;
    }
`;

export const SmallHeader = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow Condensed';
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;

    @media (max-width: 768px){
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 3.375px;
    }

    @media (max-width: 375px){
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 2.7px;
        margin-top: 48px;
    }
`;

export const BigHeader = styled.p`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    margin: 0;
    color: #FFFFFF;

     @media (max-width: 768px){
        line-height: 150px;
        margin: 24px 0;
    }

    @media (max-width: 375px){
        font-size: 80px;
        line-height: 100px;
        text-align: center;
    }
`;

export const Content = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;

    @media (max-width: 768px){
        font-size: 16px;
        line-height: 28px;
        text-align: center;
    }

    @media (max-width: 375px){
        font-size: 15px;
        line-height: 25px;
        text-align: center;
    }
`;

export const HomeButton = styled.button`
    display: block;
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

    @media (max-width: 768px){
        margin: 0;

        &:hover{
        background: transparent;
    }

    @media (max-width: 375px) {
        margin: 0;

        &:hover{
        background: transparent;
        }
    }
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

     @media (max-width: 768px){
        width: 242px;
        height: 242px;
        line-height: 37px;
        letter-spacing: 2px;
        padding: 0;
    }

    @media (max-width: 375px) {
        margin: 0;
        font-size: 20px;
        width: 150px;
        height: 150px;
    }
`;