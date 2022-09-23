import CustomLink from "../../../../App/utils";
import {
    Navigation,
    CrewNavigation,
    List,
    Span
} from '../styled.js'


export default function CrewNav() {
    return (
        <Navigation>
            <CrewNavigation>
                <List><CustomLink to="/crew"><Span active><span></span></Span></CustomLink></List>
                <List><CustomLink to="/crew/specialist"><Span><span></span></Span></CustomLink></List>
                <List><CustomLink to="/crew/pilot"><Span><span></span></Span></CustomLink></List>
                <List><CustomLink to="/crew/engineer"><Span><span></span></Span></CustomLink></List>
            </CrewNavigation>
        </Navigation>
    )
}