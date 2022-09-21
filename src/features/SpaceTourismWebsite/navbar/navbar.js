import logo from './logo.svg';
import CustomLink from "../../../App/utils";
import {
  Navigation,
  Logo,
  Menu,
  MenuList,
  Link,
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
            <List active><CustomLink to="/" ><Link><strong>00</strong> HOME</Link></CustomLink></List>
            <List><CustomLink to="/destination" ><Link><strong>02</strong> DESTINATION</Link></CustomLink></List>
            <List><CustomLink to="/crew"><Link><strong>03</strong> CREW</Link></CustomLink></List>
            <List><CustomLink to="/technology" ><Link><strong>04</strong> TECHNOLOGY</Link></CustomLink></List>
          </MenuList>
        </Menu>
      </Navigation>
    </>
  )
};