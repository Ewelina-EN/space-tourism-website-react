import Navbar from "../../navbar/navbar"
import specialist from "../images/image-mark-shuttleworth.png"
import CrewNav from './crewNav';
import { ContainerCrew, Header, HeaderSpan, Content, SectionCrew, Role, Name, Info, Img } from '../styled';

export default function Specialist() {
    return (
        <ContainerCrew>
            <Navbar />
            <Header>
                <HeaderSpan>02</HeaderSpan> Meet your crew
            </Header>
            <Content>
                <SectionCrew>
                    <Role>Mission Specialist</Role>
                    <Name>Mark Shuttleworth</Name>
                    <Info>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system.Shuttleworth became the first South African to travel to space as a space tourist.</Info>
                    <CrewNav />
                </SectionCrew>
                <Img src={specialist} alt="" className="specialist" />
            </Content>
        </ContainerCrew>
    )
}