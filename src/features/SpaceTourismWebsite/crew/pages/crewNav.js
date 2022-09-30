import CustomLink from "../../../../App/utils";
import {
    CrewNavigation,
    MenuList,
    Span
} from '../styled.js'


export default function CrewNav() {
    return (
        <CrewNavigation className="crew">
            <MenuList >
                <CustomLink to="/crew"><Span></Span></CustomLink>
                <CustomLink to="/crew/specialist"><Span></Span></CustomLink>
                <CustomLink to="/crew/pilot"><Span></Span></CustomLink>
                <CustomLink to="/crew/engineer"><Span></Span></CustomLink>
            </MenuList>
        </CrewNavigation>
    )
}