import logo from './logo.svg';
import CustomLink from "../../../App/utils";
import {
  Navigation,
  Logo,
  Menu,
  MenuList,
  Span
} from './styled';

export default function Navbar() {

  return (
    <>
      <Navigation>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Menu>
          <MenuList>
            <CustomLink to="/" ><Span><strong>00</strong> HOME</Span></CustomLink>
            <CustomLink to="/destination" ><Span><strong>02</strong> DESTINATION</Span></CustomLink>
            <CustomLink to="/crew"><Span><strong>03</strong> CREW</Span></CustomLink>
            <CustomLink to="/technology" ><Span><strong>04</strong> TECHNOLOGY</Span></CustomLink>
          </MenuList>
        </Menu>
      </Navigation>
    </>
  )
};