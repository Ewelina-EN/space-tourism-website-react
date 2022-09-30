import Navbar from "../../navbar/navbar";
import engineer from "../images/image-anousheh-ansari.png";
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

export default function Engineer() {
    return (
        <ContainerCrew>
            <Navbar />
            <Header>
                <HeaderSpan>02</HeaderSpan> Meet your crew
            </Header>
            <Mobile>
                <MobileContent>
                    <Img src={engineer} alt="" className="engineer" />
                    <CrewNav />
                    <SectionCrew>
                        <Role>Flight Engineer</Role>
                        <Name>Anousheh Ansari</Name>
                        <Info>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </Info>
                    </SectionCrew>
                </MobileContent>
            </Mobile>
            <Content>
                <SectionCrew>
                    <Role>Flight Engineer</Role>
                    <Name>Anousheh Ansari</Name>
                    <Info>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </Info>
                    <CrewNav />
                </SectionCrew>
                <Img src={engineer} alt="" className="engineer" />
            </Content>
        </ContainerCrew>
    )
};