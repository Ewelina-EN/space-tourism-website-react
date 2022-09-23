import mars from "../images/image-mars.png";
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
    DataSpan
} from "../styled";

export default function Mars() {
    return (
        <DestinationContainer>
            <Navbar />
            <Header />
            <Section>
                <img src={mars} alt="mars" />
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
                <Title>Mars</Title>
                <Info>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</Info>
            </Planet>
            <Data>
                <div className="line"></div>
                <DataInfo>
                    <DataP className="">Avg. distance</DataP>
                    <DataSpan>225 MIL. km</DataSpan>
                </DataInfo>
                <DataInfo>
                    <DataP className="">Est. travel time</DataP>
                    <DataSpan className="">9 months</DataSpan>
                </DataInfo>
            </Data>
        </div>
    )
};