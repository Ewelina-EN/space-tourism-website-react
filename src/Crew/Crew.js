import Navbar from "../navbar/navbar"
import commander from "./images/image-douglas-hurley.png"
import CrewNav from '../crew/pages/crewNav';
import {
    ContainerCrew,
    Header,
    HeaderSpan,
    Content,
    SectionCrew,
    Role,
    Name,
    Info,
    Img
} from './styled';

export default function Crew() {
    return (
        <ContainerCrew>
            <Navbar />
            <Header>
                <HeaderSpan>02</HeaderSpan> Meet your crew
            </Header>
            <Content>
                <SectionCrew>
                    <Role>Commander</Role>
                    <Name>Douglas Hurley</Name>
                    <Info>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                        and former NASA astronaut. He launched into space for the third time as
                        commander of Crew Dragon Demo-2.</Info>
                    <CrewNav />
                </SectionCrew>
                <Img src={commander} alt="" />
            </Content>
        </ContainerCrew>
    )
}
