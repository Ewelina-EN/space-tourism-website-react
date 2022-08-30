import Navigation from "./navigation";
import titan from "../images/image-titan.png";
import '../destination.css';
import Navbar from "../../navbar/navbar";

export default function Titan() {
    return (

        < main className="container_destination" >
            <Navbar />
            <Header />
            <article className="destination_section">
                <img src={titan} alt="picture of the titan" />
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
                <p className="destination_title">Titan</p>
                <p className="destination_info">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            </section>
            <section className="destination_data">
                <div className="line"></div>
                <div className="destination_data_info">
                    <p className="">Avg. distance</p>
                    <span>1.6 bil. km</span>
                </div>
                <div className="destination_data_info">
                    <p className="">Est. travel time</p>
                    <span className="">7 years</span>
                </div>
            </section>
        </div>
    )
};