import './crew.css';
import Navbar from "../navbar/navbar"
import commander from "./images/image-douglas-hurley.png"
import CrewNav from './crewNav';

export default function Crew() {
    return (
        <main className="container_crew">
            <Navbar />
            <div className="crew_header">
                <span>02</span> Meet your crew
            </div>
            <article className="crew_content">
                <div className="crew_section">
                    <section>
                        <p className="crew_role">Commander</p>
                        <p className="crew_name">Douglas Hurley</p>
                        <p className="crew_info">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                        and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.</p>
                    </section>
                    <CrewNav />
                </div>
                <img src={commander} alt="" className="crew_img" />
            </article>
        </main>
    )
}
