import CustomLink from "../utils";
import { MenuList, Link } from "./styled";

export default function TechNav() {
    return (
        <>
            <MenuList>
                <CustomLink to="/technology"><Link active>1</Link></CustomLink>
                <CustomLink to="/technology/port"><Link>2</Link></CustomLink>
                <CustomLink to="/technology/capsule"><Link>3</Link></CustomLink>
            </MenuList>
        </>
    )
}