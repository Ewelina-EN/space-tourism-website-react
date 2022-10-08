import styled from "styled-components";
import imgCrewDesktop from "./images/background-crew-desktop.jpg";
import imgCrewTablet from "./images/background-crew-tablet.jpg";
import imgCrewMobile from "./images/background-crew-mobile.jpg";

export const ContainerCrew = styled.main`
    background-image: url(${imgCrewDesktop});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover; 

    @media (max-width: 768px) {
        background-image: url(${imgCrewTablet});
    }

    @media (max-width: 375px) {
        background-image: url(${imgCrewMobile});
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
        padding: 40px 0 0 40px;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
    }

    @media (max-width: 375px) {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 70px 0 0;
    margin: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 375px) {
        display:none;
    }
`;

export const SectionCrew = styled.div`
    margin: 50px 80px 0 0;

    @media (max-width: 768px) {
        margin: 60px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 375px) {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Role = styled.p`
    font-family: 'Bellefair';
    font-style: normal;
    font-size: 32px;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.5;

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        margin: 15px 0 0 0;
    }

    @media (max-width: 375px) {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        margin: 15px 0 0 0;
    }
`;

export const Name = styled.p`
    font-family: 'Bellefair';
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 13px 0 0 0;

    @media (max-width: 768px) {
        font-size: 40px;
        line-height: 46px;
        text-align: center;
        margin: 8px 0 0 0;
    }

    @media (max-width: 375px) {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
`;

export const Info = styled.p`
    font-family: 'Barlow';
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 444px;
    margin: 29px 0 0 0;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        margin: 16px 0 0 0;
    }

    @media (max-width: 375px) {
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        width: 100%;
        margin-top: 10px;
    }
`;

export const Img = styled.img`
    display: inline-block;
    height: 600px;

    @media (max-width: 768px) {
        height: 572px;
        margin-top: 32px;
        border-bottom: 2px solid #383B4B;
        padding: 0 80px;
    }
    
    @media (max-width: 375px) {
        height: 223px;
        margin-top: 32px;
        border-bottom: 2px solid #383B4B;
        padding: 0 80px;
    }
`;

// navigation for Crew

export const CrewNavigation = styled.nav`
    list-style: none;
    display: flex;
    margin-top: 70px;
    padding: 0;
    
    @media (max-width: 768px) {
        align-items: center;
        margin-top: 40px;
    }

    @media (max-width: 375px) {
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }
`;

export const MenuList = styled.ul`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    list-style: none;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        margin: 0;
    }

    @media (max-width: 375px) {
        display: flex;
        align-items:center;
        justify-content: center;
    }
`;

export const Span = styled.span`    
    display: inline-block;
    margin-right: 25px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #FFFFFF;

    @media (max-width: 768px) {
        width: 10px;
        height: 10px;
        margin-right: 16px;
        background-color: #FFFFFF;
    }

    @media (max-width: 375px) {
        margin: 0 10px;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: #FFFFFF;
    }
`;

export const Mobile = styled.article`
    display: none;

    @media (max-width: 375px) {
        height: 100%;
        display: block;
        padding-bottom: 104px;
    }
`;

export const MobileContent = styled.div` 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 16px 24px 0 24px;
`;