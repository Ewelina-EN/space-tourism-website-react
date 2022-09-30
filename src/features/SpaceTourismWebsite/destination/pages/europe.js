import europe from "../images/image-europa.png";
import Navbar from "../../navbar/navbar";
import Navigation from "./navigation";
import {
    DestinationContainer,
    Section,
    DestinationHeader,
    HeaderSpan,
    Planet,
    Title,
    Info,
    Data,
    DataInfo,
    DataP,
    DataSpan,
    Image
} from "../styled";


export default function Europe() {
    return (
        <DestinationContainer>
            <Navbar />
            <Header />
            <Section>
                <Image src={europe} alt="europe" />
                <Content />
            </Section>
        </DestinationContainer>
    )
};

function Header() {
    return (
        <DestinationHeader>
            <HeaderSpan>01</HeaderSpan>Pick your destination
        </DestinationHeader>
    )
};

function Content() {
    return (
        <div>
            <Navigation />
            <Planet>
                <Title>Europa</Title>
                <Info>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</Info>
            </Planet>
            <Data>
                <div className="line"></div>
                <DataInfo>
                    <DataP className="">Avg. distance</DataP>
                    <DataSpan>2628 MIL. km</DataSpan>
                </DataInfo>
                <DataInfo>
                    <DataP className="">Est. travel time</DataP>
                    <DataSpan className="">3 years</DataSpan>
                </DataInfo>
            </Data>
        </div>
    )
};