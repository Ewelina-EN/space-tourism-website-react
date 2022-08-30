import './home.css'
import Article from './article/article.js'
import Navbar from '../navbar/navbar.js'

export default function Home() {
    return (
        <main className="container_home">
            <Navbar />
            <Article />
        </main>

    )
}