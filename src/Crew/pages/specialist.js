import '../crew.css';
import Navbar from "../../navbar/navbar"
import specialist from "../images/image-mark-shuttleworth.png"
import CrewNav from '../crewNav';

export default function Specialist() {
    return (
        <main className="container_crew">
            <Navbar />
            <div className="crew_header">
                <span>02</span> Meet your crew
            </div>
            <article className="crew_content">
                <div className="crew_section">
                    <section>
                        <p className="crew_role">Mission Specialist</p>
                        <p className="crew_name">Mark Shuttleworth</p>
                        <p className="crew_info">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                    </section>
                    <CrewNav />
                </div>
                <img src={specialist} alt="" className="specialist" />
            </article>
        </main>
    )
}
