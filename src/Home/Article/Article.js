import { HomeArticle, TextSection, SmallHeader, BigHeader, Content, HomeButton, BtnSpan } from './styled.js'

export default function Article() {
    return (
        <HomeArticle>
            <HomeTextSection />
            <Button />
        </HomeArticle>
    )
}

function HomeTextSection() {
    return (
        <TextSection>
            <SmallHeader>SO, YOU WANT TO TRAVEL TO</SmallHeader>
            <BigHeader>SPACE</BigHeader>
            <Content>Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</Content>
        </TextSection>
    )
}

function Button() {
    return (
        <HomeButton><BtnSpan>Explore</BtnSpan></HomeButton>
    )
}
