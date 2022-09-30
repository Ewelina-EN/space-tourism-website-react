import Navbar from '../../navbar/navbar';
import port from "../images/image-spaceport-portrait.jpg";
import portLand from "../images/image-spaceport-landscape.jpg";
import TechNav from '../techNav';
import {
    TechContainer,
    Header,
    HeaderSpan,
    Content,
    ContentBox,
    NavMenu,
    Info,
    Title,
    Keyword,
    Definition,
    Mobile,
    MobileContent,
    Image
} from '../styled';

export default function Port() {
    return (
        <TechContainer>
            <Navbar />
            <Header>
                <HeaderSpan>03</HeaderSpan>Space launch 101
            </Header>
            <Mobile>
                <Image src={portLand} alt="port" />
                <TechNav />
                <MobileContent>
                    <ContentBox>
                        <NavMenu>
                            <TechNav />
                        </NavMenu>
                        <Info>
                            <Title>The terminology...</Title>
                            <Keyword>Spaceport</Keyword>
                            <Definition>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</Definition>
                        </Info>
                    </ContentBox>
                </MobileContent>
            </Mobile>
            <Content>
                <ContentBox>
                    <NavMenu>
                        <TechNav />
                    </NavMenu>
                    <Info>
                        <Title>The terminology...</Title>
                        <Keyword>Spaceport</Keyword>
                        <Definition>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</Definition>
                    </Info>
                </ContentBox>
                <section><img src={port} alt="port" /></section>
            </Content>
        </TechContainer>
    )
};