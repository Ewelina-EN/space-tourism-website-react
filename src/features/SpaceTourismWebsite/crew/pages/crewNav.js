import CustomLink from "../../../../App/utils";
import {
    Navigation,
    CrewNavigation,
    List,
    Link
} from '../styled.js'


export default function CrewNav() {
    return (
        <Navigation>
            <CrewNavigation>
                <List><CustomLink to="/crew"><Link active><span></span></Link></CustomLink></List>
                <List><CustomLink to="/crew/specialist"><Link><span></span></Link></CustomLink></List>
                <List><CustomLink to="/crew/pilot"><Link><span></span></Link></CustomLink></List>
                <List><CustomLink to="/crew/engineer"><Link><span></span></Link></CustomLink></List>
            </CrewNavigation>
        </Navigation>
    )
}