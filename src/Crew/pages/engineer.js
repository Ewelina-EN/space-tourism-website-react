import '../crew.css';
import Navbar from "../../navbar/navbar"
import engineer from "../images/image-anousheh-ansari.png"
import CrewNav from '../crewNav';

export default function Engineer() {
    return (
        <main className="container_crew">
            <Navbar />
            <div className="crew_header">
                <span>02</span> Meet your crew
            </div>
            <article className="crew_content">
                <div className="crew_section">
                    <section>
                        <p className="crew_role">Flight Engineer</p>
                        <p className="crew_name">Anousheh Ansari</p>
                        <p className="crew_info">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                    </section>
                    <CrewNav />
                </div>
                <img src={engineer} alt="" className="engineer" />
            </article>
        </main>
    )
}
