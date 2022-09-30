import Navbar from '../../navbar/navbar';
import capsule from "../images/image-space-capsule-portrait.jpg";
import capsuleLand from "../images/image-space-capsule-landscape.jpg";
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

export default function Capsule() {
    return (
        <TechContainer>
            <Navbar />
            <Header>
                <HeaderSpan>03</HeaderSpan>Space launch 101
            </Header>
            <Mobile>
                <Image src={capsuleLand} alt="capsule" />
                <TechNav />
                <MobileContent>
                    <ContentBox>
                        <NavMenu>
                            <TechNav />
                        </NavMenu>
                        <Info>
                            <Title>The terminology...</Title>
                            <Keyword>Space Capsule</Keyword>
                            <Definition>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</Definition>
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
                        <Keyword>Space Capsule</Keyword>
                        <Definition>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</Definition>
                    </Info>
                </ContentBox>
                <Image src={capsule} alt="capsule" />
            </Content>
        </TechContainer>
    )
};