import styled from "styled-components";
import imgHomeDesktop from "./images/background-home-desktop.jpg";
import imgHomeTablet from "./images/background-home-tablet.jpg";
import imgHomeMobile from "./images/background-home-mobile.jpg";

export const Container = styled.main`
    background-image: url(${imgHomeDesktop});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;


    @media (max-width: 768px) {
        background-image: url(${imgHomeTablet});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (max-width: 375px) {
        background-image: url(${imgHomeMobile});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;