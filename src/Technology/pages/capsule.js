import Navbar from '../../navbar/navbar';
import '../technology.css';
import capsule from "../images/image-space-capsule-portrait.jpg";
import TechNav from '../techNav';

export default function Capsule() {
    return (
        <main class="tech_container">
            <Navbar />
            <div class="tech_header">
                <span>03</span>Space launch 101
            </div>
            <article class="tech_content">
                <div>
                    <section class="tech_tab">
                        <TechNav />
                    </section>
                    <section class="tech_info">
                        <p class="tech_title">The terminology...</p>
                        <p class="tech_keyword">Space Capsule</p>
                        <p class="tech_definition">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                    </section>
                </div>
                <section><img src={capsule} alt="capsule" /></section>
            </article>
        </main>

    )
}