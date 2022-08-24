import './Home.css'
import Article from './Article/Article'
import Navbar from '../Navbar/Navbar'


export default function Home() {
    return (
        <main className="container_home">
            <Navbar />
            <Article />
        </main>

    )
}