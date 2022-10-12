import styled from "styled-components";
import imgDestinationDesktop from "./images/background-destination-desktop.jpg";
import imgDestinationTablet from "./images/background-destination-tablet.jpg";
import imgDestinationMobile from "./images/background-destination-mobile.jpg";

export const DestinationContainer = styled.main`
    background-image: url(${imgDestinationDesktop});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        background-image: url(${imgDestinationTablet});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (max-width: 375px) {
        background-image: url(${imgDestinationMobile});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const Section = styled.article`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 100px 0 70px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 90px 0 40px 0;
    }

    @media(max-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 29px 0 58px 0;
    }
`;

export const Image = styled.img`

    @media (max-width: 768px) {
        width: 300px;
        height: 300px;
        margin-bottom: 53px;
    }

    @media(max-width: 375px) {
        width: 170px;
        height: 170px;
        margin-bottom: 29px;
    }
`;

export const DestinationHeader = styled.div`
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    color: #FFFFFF;
    left: 10.14%;
    top: calc(25% - 34px/2);
    font-size: 28px;
    letter-spacing: 4.725px;
    padding: 70px 0 0 150px;
    
    @media (max-width: 768px) {
        padding: 40px 0 0 40px;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    @media(max-width: 375px) {
        text-align: center;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        padding: 88px 0 0 0;
    }
`;

export const HeaderSpan = styled.span`
    padding-right: 10px;
    font-weight: 700;
    mix-blend-mode: normal;
    opacity: 0.25;

    @media(max-width: 375px) {
        text-align: center;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
    }
`;

export const Planet = styled.section`
    width: 450px;

    @media(max-width: 768px) {
        width: 573px;
        margin: 25px;
    }

    @media(max-width: 375px) {
        width: 375px;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
`;

export const Title = styled.p`
    text-transform: uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    margin: 20px 0 0 0;

    @media (max-width: 768px) {
        font-size: 80px;
        line-height: 92px;
        text-align: center;
        margin-top: 32px;
    }

    @media(max-width: 375px) {
        font-size:56px;
        line-height: 64px;
        text-align: center;
    }
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

    @media(max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        width: 573px;
        height: 84px;
    justify-content: center;
        margin-bottom: 0;
    }

    @media(max-width: 375px) {
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        width: 327px;
        margin: 0;
        height: 125px;
    }
`;

export const Data = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
    margin-top: 20px;
    border-top: 1px solid #383B4B;

    @media(max-width: 768px) {
        justify-content: center;
        border-top: 1px solid #383B4B;
        width: 573px;
        margin: 20px 24px;
    }   

    @media(max-width: 375px) {
        display: flex;
        flex-direction: column; 
        border-top: 1px solid #383B4B;
        margin: 20px 24px;
        width: auto;    
    }   
`;

export const DataInfo = styled.div`
    margin-top: 10px;
    padding-right: 79px;

    @media(max-width: 768px) {
        padding: 0;
        margin: 10px;
        text-align: center;
    }   

    @media(max-width: 375px) {
        margin: 32px 0 0 0;
        padding:0;
        text-align: center;   
    }
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

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
    }

    @media(max-width: 375px) {
        justify-content: center;  
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        color: #D0D6F9;
    }
`;

export const MenuList = styled.ul`
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0;

    @media(max-width: 768px) {
        justify-content: space-around;
    }
  
    @media(max-width: 375px) {
        justify-content: space-around;
    }
`;

export const Span = styled.span`
    border-bottom: 3px transparent solid;
    color: #FFFFFF;
    padding: 0 0 10px 0;

    @media(max-width: 375px) {
    color: #D0D6F9;
    margin: 0 0 10px 0;
    padding: 0 0 10px 0;
    }
`;

export const Tab = styled.div`

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    @media(max-width: 375px) {
        display: none;
    }
`;