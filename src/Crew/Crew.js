import './Crew.css'
import Navbar from "../Navbar/Navbar"
import commander from "./images/image-douglas-hurley.png"

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
                    <nav className="crew_menu">
                        <ul>
                            <li><a href="./crew-commander.html" className="active"><span></span></a></li>
                            <li><a href="/crew/crew-specialist.html"><span></span></a></li>
                            <li><a href="/crew/crew-pilot.html"><span></span></a></li>
                            <li><a href="/crew/crew-engineer.html"><span></span></a></li>
                        </ul>
                    </nav>
                </div>
                <img src={commander} alt="" className="crew_img" />
            </article>
        </main>
    )
}
