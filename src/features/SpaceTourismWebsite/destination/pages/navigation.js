import CustomLink from "../../../../App/utils";
import {
    DestinationNav,
    MenuList,
    Span
} from '../styled';

export default function Navigation() {
    return (
        <>
            <DestinationNav>
                <MenuList className="navigation">
                    <CustomLink to="/destination"><Span>Moon</Span></CustomLink>
                    <CustomLink to="/destination/mars"><Span>Mars</Span></CustomLink>
                    <CustomLink to="/destination/europe"><Span>Europe</Span></CustomLink>
                    <CustomLink to="/destination/titan"><Span>Titan</Span></CustomLink>
                </MenuList>
            </DestinationNav>
        </>
    )
};