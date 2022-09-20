import CustomLink from '../../utils';
import '../crew.css';


export default function CrewNav() {
    return (
        <nav className="crew_menu">
            <ul>
                <CustomLink className="active" to="/crew"><span></span></CustomLink>
                <CustomLink to="/crew/specialist"><span></span></CustomLink>
                <CustomLink to="/crew/pilot"><span></span></CustomLink>
                <CustomLink to="/crew/engineer"><span></span></CustomLink>
            </ul>
        </nav>
    )
}