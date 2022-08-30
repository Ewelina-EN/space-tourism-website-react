import CustomLink from "../utils";

export default function TechNav() {
    return (
        <nav>
            <ul>
                <CustomLink className="active" to="/technology">1</CustomLink>
                <CustomLink to="/technology/port">2</CustomLink>
                <CustomLink to="/technology/capsule">3</CustomLink>
            </ul>
        </nav>
    )
}