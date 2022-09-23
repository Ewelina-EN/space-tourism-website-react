import styled from "styled-components";
import imgDestination from "./images/background-destination-desktop.jpg";

export const DestinationContainer = styled.main`
    background-image: url(${imgDestination});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Section = styled.article`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 160px 0 70px 0;
`;

export const DestinationHeader = styled.div`
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

export const Planet = styled.section`
    width: 450px;
`;

export const Title = styled.p`
    text-transform: uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    margin: 20px 0 20px 0;
`;

export const Info = styled.p`
    height: 128px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    margin-bottom: 50px;
`;

export const Data = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
    margin-top: 20px;
    border-top: 1px solid #383B4B;
`;

export const DataInfo = styled.div`
    margin-top: 10px;
    padding-right: 79px;
`;

export const DataP = styled.p`
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #D0D6F9;
`;

export const DataSpan = styled.span`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

// navigation for Destination

export const DestinationNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin: 0;
    text-decoration:none;
`;

export const MenuList = styled.ul`
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
`;

export const Span = styled.span`
    text-decoration: none;
    border-bottom: 3px transparent solid;
    color: #FFFFFF;
    padding: 10px 0;
`;

export const List = styled.li`
    padding-bottom: 13px;
    border-bottom: 3px transparent solid;

    &:active{
        border-color: #FFFFFF;
    }

    &:hover{
        border-color: #8a8b90;
    }
`;



