import moon from "./images/image-moon.png";
import Navbar from "../navbar/navbar";
import Navigation from "./pages/navigation";
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
} from "./styled";

export default function Destination() {
    return (
        <DestinationContainer>
            <Navbar />
            <Header />
            <Section>
                <Image src={moon} alt="moon" />
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
        <>
            <Navigation />
            <Planet>
                <Title>Moon</Title>
                <Info>See our planet as you’ve never seen it before. A perfect relaxing trip away to
                    help regain perspective and come back refreshed. While you’re there, take in some history by visiting the
                    Luna 2 and Apollo 11 landing sites.</Info>
            </Planet>
            <Data>
                <DataInfo>
                    <DataP className="">Avg. distance</DataP>
                    <DataSpan>384,400 km</DataSpan>
                </DataInfo>
                <DataInfo>
                    <DataP className="">Est. travel time</DataP>
                    <DataSpan className="">3 days</DataSpan>
                </DataInfo>
            </Data>
        </>
    )
};