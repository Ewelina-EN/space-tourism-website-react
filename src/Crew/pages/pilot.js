import '../crew.css';
import Navbar from "../../navbar/navbar"
import pilot from "../images/image-victor-glover.png"
import CrewNav from './crewNav';

export default function Pilot() {
    return (
        <main className="container_crew">
            <Navbar />
            <div className="crew_header">
                <span>02</span> Meet your crew
            </div>
            <article className="crew_content">
                <div className="crew_section">
                    <section>
                        <p className="crew_role">Pilot</p>
                        <p className="crew_name">Victor Glover</p>
                        <p className="crew_info">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                    </section>
                    <CrewNav />
                </div>
                <img src={pilot} alt="" className="pilot" />
            </article>
        </main>
    )
}
