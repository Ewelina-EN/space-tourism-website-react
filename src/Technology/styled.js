import styled from "styled-components";
import imgTech from "./images/background-technology-desktop.jpg";

export const TechContainer = styled.main`
    background-image: url(${imgTech});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Header = styled.div`
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    left: 10.14%;
    top: calc(25% - 34px/2);
    font-size: 28px;
    letter-spacing: 4.725px;
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
    padding: 136px 0 101px 115px ;
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
`;

export const Title = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    text-transform: uppercase;
    margin-top: 0;
`;

export const Keyword = styled.p`
    font-family: 'Bellefair';
    font-size: 50px;
    line-height: 64px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin: 0;
`;

export const Definition = styled.p`
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 444px;
`;

// technav menu

export const NavMenu = styled.section`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    font-family: 'Bellefair';
    font-size: 32px;
`;

export const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Link = styled.a`
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

    

   
`;


