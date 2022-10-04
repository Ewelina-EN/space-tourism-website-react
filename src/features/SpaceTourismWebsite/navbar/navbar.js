import logo from './logo.svg';
import CustomLink from "../../../App/utils";
import {
  Navigation,
  Logo,
  Menu,
  MenuList,
  Span,
  ImgCloseIcon,
  ImgBurgerIcon,
  NavMobile,
  ImgLogo,
  MenuMobile
} from './styled';
import burgerIcon from '../navbar/icon-hamburger.svg';
import closeIcon from '../navbar/icon-close.svg';
import './mobile.css';
import { useState } from 'react';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navigation>
        <Logo>
          <ImgLogo src={logo} alt="" />
        </Logo>
        <Menu>
          <MenuList className='navigation' id="menuList">
            <CustomLink to="/" ><Span><strong>00</strong> HOME</Span></CustomLink>
            <CustomLink to="/destination" ><Span><strong>02</strong> DESTINATION</Span></CustomLink>
            <CustomLink to="/crew"><Span><strong>03</strong> CREW</Span></CustomLink>
            <CustomLink to="/technology" ><Span><strong>04</strong> TECHNOLOGY</Span></CustomLink>
          </MenuList>
        </Menu>
      </Navigation>

      <NavMobile >
        <ImgLogo src={logo} alt="" />
        <ImgBurgerIcon src={burgerIcon} alt="burger icon" onClick={showSidebar} />
      </NavMobile>

      <MenuMobile>
        <MenuList className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ImgCloseIcon src={closeIcon} alt="close icon" onClick={showSidebar} />
          <CustomLink to="/" ><Span><strong>00</strong> HOME</Span></CustomLink>
          <CustomLink to="/destination" ><Span><strong>02</strong> DESTINATION</Span></CustomLink>
          <CustomLink to="/crew"><Span><strong>03</strong> CREW</Span></CustomLink>
          <CustomLink to="/technology" ><Span><strong>04</strong> TECHNOLOGY</Span></CustomLink>
        </MenuList>
      </MenuMobile>
    </>
  )
};