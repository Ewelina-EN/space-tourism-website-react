import Navbar from '../../navbar/navbar';
import '../technology.css';
import port from "../images/image-spaceport-portrait.jpg";
import TechNav from '../techNav';

export default function Port() {
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
                        <p class="tech_keyword">Launch vehicle</p>
                        <p class="tech_definition">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
            it's quite an awe-inspiring sight on the launch pad!</p>
                    </section>
                </div>
                <section><img src={port} alt="port" /></section>
            </article>
        </main>

    )
}