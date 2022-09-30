import Navbar from "../../navbar/navbar";
import pilot from "../images/image-victor-glover.png";
import CrewNav from './crewNav';
import {
    ContainerCrew,
    Header,
    HeaderSpan,
    Content,
    SectionCrew,
    Role,
    Name,
    Info,
    Img,
    Mobile,
    MobileContent
} from '../styled';

export default function Pilot() {
    return (
        <ContainerCrew>
            <Navbar />
            <Header>
                <HeaderSpan>02</HeaderSpan> Meet your crew
            </Header>
            <Mobile>
                <MobileContent>
                    <Img src={pilot} alt="" className="pilot" />
                    <CrewNav />
                    <SectionCrew>
                        <Role>Pilot</Role>
                        <Name>Victor Glover</Name>
                        <Info>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </Info>
                    </SectionCrew>
                </MobileContent>
            </Mobile>
            <Content>
                <SectionCrew>
                    <Role>Pilot</Role>
                    <Name>Victor Glover</Name>
                    <Info>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </Info>
                    <CrewNav />
                </SectionCrew>
                <Img src={pilot} alt="" className="pilot" />
            </Content>
        </ContainerCrew>
    )
};