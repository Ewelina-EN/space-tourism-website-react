import europe from "../images/image-europa.png";
import '../destination.css';
import Navbar from "../../navbar/navbar";
import Navigation from "./navigation";

export default function Europe() {
    return (

        < main className="container_destination" >
            <Navbar />
            <Header />
            <article className="destination_section">
                <img src={europe} alt="europe" />
                <Content />
            </article>
        </main >
    )
};

function Header() {
    return (
        <div className="destination_header">
            <span>01</span>Pick your destination
        </div>
    )
};

function Content() {
    return (
        <div className="destination_content">
            <Navigation />
            <section className="destination_planet">
                <p className="destination_title">Europe</p>
                <p className="destination_info">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            </section>
            <section className="destination_data">
                <div className="line"></div>
                <div className="destination_data_info">
                    <p className="">Avg. distance</p>
                    <span>628 mil. km</span>
                </div>
                <div className="destination_data_info">
                    <p className="">Est. travel time</p>
                    <span className="">3 years</span>
                </div>
            </section>
        </div>
    )
};