import '../destination.css';
import CustomLink from "../../utils";

export default function Navigation() {

    return (
        <>
            <nav className="destination_menu">
                <ul>
                    <CustomLink className="active" to="/destination">Moon</CustomLink>
                    <CustomLink to="/destination/mars" >Mars</CustomLink>
                    <CustomLink to="/destination/europe" >Europe</CustomLink>
                    <CustomLink to="/destination/titan" >Titan</CustomLink>
                </ul>
            </nav>
        </>
    )
}
