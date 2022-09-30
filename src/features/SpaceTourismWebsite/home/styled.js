import styled from "styled-components";
import imgHomeDesktop from "./images/background-home-desktop.jpg";
import imgHomeMobile from "./images/background-home-mobile.jpg";

export const Container = styled.main`
    background-image: url(${imgHomeDesktop});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        background-image: url(${imgHomeMobile});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        max-height: 667px;
    }
`;