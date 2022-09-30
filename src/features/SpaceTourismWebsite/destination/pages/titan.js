import Navigation from "./navigation";
import titan from "../images/image-titan.png";
import Navbar from "../../navbar/navbar";
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

export default function Titan() {
    return (
        <DestinationContainer>
            <Navbar />
            <Header />
            <Section>
                <Image src={titan} alt="titan" />
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
                <Title>Titan</Title>
                <Info>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</Info>
            </Planet>
            <Data>
                <div className="line"></div>
                <DataInfo>
                    <DataP className="">Avg. distance</DataP>
                    <DataSpan>1.6 BIL. km</DataSpan>
                </DataInfo>
                <DataInfo>
                    <DataP className="">Est. travel time</DataP>
                    <DataSpan className="">7 years</DataSpan>
                </DataInfo>
            </Data>
        </div>
    )
};