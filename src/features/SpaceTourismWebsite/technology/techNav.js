import CustomLink from "../../../App/utils";
import { MenuList, Span } from "./styled";

export default function TechNav() {
    return (
        <>
            <MenuList>
                <CustomLink to="/technology"><Span active>1</Span></CustomLink>
                <CustomLink to="/technology/port"><Span>2</Span></CustomLink>
                <CustomLink to="/technology/capsule"><Span>3</Span></CustomLink>
            </MenuList>
        </>
    )
}