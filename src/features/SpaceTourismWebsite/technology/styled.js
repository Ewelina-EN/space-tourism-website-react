import styled from "styled-components";
import imgTechDesktop from "./images/background-technology-desktop.jpg";
import imgTechMobile from "./images/background-technology-mobile.jpg";

export const TechContainer = styled.main`
    background-image: url(${imgTechDesktop});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        background-image: url(${imgTechMobile});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const Image = styled.img`
    @media (max-width: 768px) {
        height: 170px;
        width: 100%;
    }
`;

export const Header = styled.div`
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    color: #FFFFFF;
    left: 10.14%;
    top: calc(25% - 34px/2);
    font-size: 28px;
    letter-spacing: 4.725px;
    padding: 70px 0 0 150px;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        text-align: center;
        padding: 24px 0 0 0;
    }
`;

export const HeaderSpan = styled.span`
    padding-right: 10px;
    font-weight: 700;
    mix-blend-mode: normal;
    opacity: 0.25;
`;

export const Content = styled.article`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 70px 0 15px 70px;
    margin: 0;

     @media (max-width: 768px) {
        display:none;
     }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Info = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 0 0 40px;

    @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-between;
        padding: 26px 0 100px 0;
        margin:0;
    }
`;

export const Title = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    text-transform: uppercase;
    margin-top: 0;

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 2.3625px;
    }
`;

export const Keyword = styled.p`
    font-family: 'Bellefair';
    font-size: 50px;
    line-height: 64px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
`;

export const Definition = styled.p`
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 444px;

    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        width:327px;
    }
`;

// technav menu

export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    font-family: 'Bellefair';
    font-size: 32px;

      @media (max-width: 768px) {
        display:none;
    }
`;

export const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content: space-between;
    }
`;

export const Span = styled.span`
    border: 1px solid #494A52;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

    &:active{
        border: 1px #FFFFFF solid;
        background-color: #FFFFFF;
        color: #0B0D17;
    }

    &:hover{
        border: 1px #FFFFFF solid;
    } 

    @media (max-width: 768px) {
        height:40px;
        width: 40px;
        margin: 34px 15px 0 0;
    }
`;

export const Mobile = styled.article`
    display: none;

    @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 32px;
    }
`;
export const MobileContent = styled.div``;


