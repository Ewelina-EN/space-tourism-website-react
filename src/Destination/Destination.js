import moon from "./images_desti/image-moon.png"
import './Destination.css';
import Navbar from "../Navbar/Navbar";

export default function Destination() {
    return (
        <main className="container_destination">
            <Navbar />
            <div className="destination_header">
                <span>01</span>Pick your destination
            </div>
            <article className="destination_section">
                <img src={moon} alt="picture of the moon" />
                <div className="destination_content">
                    <nav className="destination_menu">
                        <ul>
                            <li><a href="destination-moon.html" className="active">Moon</a></li>
                            <li><a href="destination-mars.html">Mars</a></li>
                            <li><a href="destination-europa.html">Europa</a></li>
                            <li><a href="destination-titan.html">Titan</a></li>
                        </ul>
                    </nav>
                    <section className="destination_planet">
                        <p className="destination_title">Moon</p>
                        <p className="destination_info">See our planet as you’ve never seen it before. A perfect relaxing trip away to
                        help regain perspective and come back refreshed. While you’re there, take in some history by visiting the
            Luna 2 and Apollo 11 landing sites.</p>
                    </section>
                    <section className="destination_data">
                        <div className="line"></div>
                        <div className="destination_data_info">
                            <p className="">Avg. distance</p>
                            <span>384,400 km</span>
                        </div>
                        <div className="destination_data_info">
                            <p className="">Est. travel time</p>
                            <span className="">3 days</span>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    )
}
