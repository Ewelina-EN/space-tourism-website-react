import styled from "styled-components";

export const Navigation = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    margin-left: 55px; 
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
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding: 0 165px 0 80px;
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 630px;
`;

export const Link = styled.a`
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
`;

export const List = styled.li`
    border-bottom: 3px transparent solid;

    &:active{
        border-color: #FFFFFF
    };

    &:hover{
        border-bottom: 3px #8A8B90 solid;
    }
    `;
