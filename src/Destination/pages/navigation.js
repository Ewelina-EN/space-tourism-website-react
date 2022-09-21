import '../destination.css';
import CustomLink from "../../utils";
import {
    DestinationNav,
    MenuList,
    List,
    Link
} from '../styled';

export default function Navigation() {

    return (
        <>
            <DestinationNav>
                <MenuList>
                    <List><CustomLink to="/destination"><Link>Moon</Link></CustomLink></List>
                    <List><CustomLink to="/destination/mars"><Link>Mars</Link></CustomLink></List>
                    <List><CustomLink to="/destination/europe"><Link>Europe</Link></CustomLink></List>
                    <List><CustomLink to="/destination/titan"><Link>Titan</Link></CustomLink></List>
                </MenuList>
            </DestinationNav>
        </>
    )
}
