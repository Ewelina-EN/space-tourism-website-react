import styled from "styled-components";

export const Navigation = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    margin-left: 55px; 

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavMobile = styled.div`
    display: none;
        
    @media (max-width: 667px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0 0 0;
        margin: 0 24px;
    }
`;

export const Logo = styled.div`
    &::after{
    content: "";
    position: absolute;
    max-width: 500px;
    width:50%;
    height: 1px;
    left: 167px;
    top: 80px;
    background:#fff;
    opacity: 0.25;
    z-index: 10;
    }

    @media (max-width: 768px) {
        &::after{
            display:none;
        }
    }
`;

export const ImgLogo = styled.img`
    @media (max-width: 768px) {
        display:inline;
    }
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding: 0 165px 0 80px;
`;

export const MenuMobile = styled.nav`
    display: none;

    @media (max-width: 768px) {
        display:flex;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 630px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Span = styled.span`
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #FFFFFF;
    margin: 0 10px;
    text-decoration:none;
    display: inline-block;
    padding:30px 0 28px 0;
    border-bottom: 3px transparent solid;

    @media (max-width: 768px) {
        padding: 30px 0 5px 0;
        margin: 0;
    }
`;

export const List = styled.li`
    border-bottom: 3px transparent solid;
`;

export const ImgCloseIcon = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: inline-flex;
        width: 24px;
        height: 24px;
        margin-bottom: 64px;
        margin-left: 180px;
    }
`;

export const ImgBurgerIcon = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;