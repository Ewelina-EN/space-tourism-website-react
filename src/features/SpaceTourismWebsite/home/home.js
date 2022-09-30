import Article from './article/article.js';
import Navbar from '../navbar/navbar.js';
import { Container } from './styled';

export default function Home() {
    return (
        <Container >
            <Navbar />
            <Article />
        </Container>
    )
};