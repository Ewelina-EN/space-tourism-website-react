import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ to, children, ...props }) {
    // console.log("to", to);
    // console.log("children", to, children);
    // console.log("props", to, props);
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    // console.log("resolvedPath", to, resolvedPath);
    // console.log("isActive", to, isActive);

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
};