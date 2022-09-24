import CustomLink from "../../../../App/utils";
import {
    Navigation,
    Span
} from '../styled.js'


export default function CrewNav() {
    return (
        <Navigation>
            <CustomLink to="/crew"><Span active><span></span></Span></CustomLink>
            <CustomLink to="/crew/specialist"><Span><span></span></Span></CustomLink>
            <CustomLink to="/crew/pilot"><Span><span></span></Span></CustomLink>
            <CustomLink to="/crew/engineer"><Span><span></span></Span></CustomLink>
        </Navigation>
    )
}