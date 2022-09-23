import logo from './logo.svg';
import CustomLink from "../../../App/utils";
import {
  Navigation,
  Logo,
  Menu,
  MenuList,
  Span,
  List
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
            <List active><CustomLink to="/" ><Span><strong>00</strong> HOME</Span></CustomLink></List>
            <List><CustomLink to="/destination" ><Span><strong>02</strong> DESTINATION</Span></CustomLink></List>
            <List><CustomLink to="/crew"><Span><strong>03</strong> CREW</Span></CustomLink></List>
            <List><CustomLink to="/technology" ><Span><strong>04</strong> TECHNOLOGY</Span></CustomLink></List>
          </MenuList>
        </Menu>
      </Navigation>
    </>
  )
};