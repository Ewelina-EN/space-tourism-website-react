import CustomLink from "../../../../App/utils";
import {
    DestinationNav,
    MenuList,
    List,
    Span
} from '../styled';

export default function Navigation() {

    return (
        <>
            <DestinationNav>
                <MenuList>
                    <List><CustomLink to="/destination"><Span>Moon</Span></CustomLink></List>
                    <List><CustomLink to="/destination/mars"><Span>Mars</Span></CustomLink></List>
                    <List><CustomLink to="/destination/europe"><Span>Europe</Span></CustomLink></List>
                    <List><CustomLink to="/destination/titan"><Span>Titan</Span></CustomLink></List>
                </MenuList>
            </DestinationNav>
        </>
    )
}
