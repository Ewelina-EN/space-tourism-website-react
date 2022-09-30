import Navbar from '../navbar/navbar';
import vehicle from "./images/image-launch-vehicle-portrait.jpg";
import vehicleLand from "./images/image-launch-vehicle-landscape.jpg";
import TechNav from './techNav';
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
    Image,
    Mobile,
    MobileContent
} from './styled';

export default function Technology() {
    return (
        <TechContainer>
            <Navbar />
            <Header>
                <HeaderSpan>03</HeaderSpan>Space launch 101
            </Header>
            <Mobile>
                <Image src={vehicleLand} alt="vehicle" />
                <TechNav />
                <MobileContent>
                    <ContentBox>
                        <NavMenu>
                            <TechNav />
                        </NavMenu>
                        <Info>
                            <Title>The terminology...</Title>
                            <Keyword>Launch vehicle</Keyword>
                            <Definition>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                                payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                                it's quite an awe-inspiring sight on the launch pad!</Definition>
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
                        <Keyword>Launch vehicle</Keyword>
                        <Definition>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                            it's quite an awe-inspiring sight on the launch pad!</Definition>
                    </Info>
                </ContentBox>
                <Image src={vehicle} alt="vehicle" />
            </Content>
        </TechContainer>
    )
};