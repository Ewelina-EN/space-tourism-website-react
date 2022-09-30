import styled from "styled-components";
import imgCrew from "./images/background-crew-desktop.jpg"

export const ContainerCrew = styled.main`
    background-image: url(${imgCrew});
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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 160px 0 0 0;
    margin: 0;
`;

export const SectionCrew = styled.div`
    margin: 50px 80px 0 0;
`;

export const Role = styled.p`
    font-family: 'Bellefair';
    font-style: normal;
    font-size: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.5;
`;

export const Name = styled.p`
    font-family: 'Bellefair';
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 13px 0 0 0;
`;

export const Info = styled.p`
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 444px;
    margin: 29px 0 0 0;
`;

export const Img = styled.img`
    display: inline-block;
    height: 600px;
`;

// navigation for Crew

export const CrewNavigation = styled.nav`
    list-style: none;
    display: flex;
    margin-top: 100px;
    padding: 0;
`;

export const MenuList = styled.ul`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    list-style: none;
`;

export const Span = styled.span`    
    display: inline-block;
    margin-right: 25px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #383838;
`;