import Navbar from '../navbar/navbar'
import './technology.css'
import vehicle from "./images/image-launch-vehicle-portrait.jpg"

export default function Technology() {
    return (
        <main class="tech_container">
            <Navbar />
            <div class="tech_header">
                <span>03</span>Space launch 101
            </div>
            <article class="tech_content">
                <div>
                    <section class="tech_tab">
                        <nav>
                            <ul>
                                <li><a href="/technology/technology-vehicle.html" class="active">1</a></li>
                                <li><a href="/technology/technology-spaceport.html">2</a></li>
                                <li><a href="/technology/technology-capsule.html">3</a></li>
                            </ul>
                        </nav>
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
                <section><img src={vehicle} alt="vehicle image" /></section>
            </article>
        </main>

    )
}