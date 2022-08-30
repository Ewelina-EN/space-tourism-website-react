import moon from "./images/image-moon.png";
import './destination.css';
import Navbar from "../navbar/navbar";
import CustomLink from "../utils";

export default function Destination() {
    return (

        < main className="container_destination" >
            <Navbar />
            <Header />
            <article className="destination_section">
                <img src={moon} alt="picture of the moon" />
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
            <nav className="destination_menu">
                {/* <ul>
                    <li><a href="destination-moon.html" className="active">Moon</a></li>
                    <li><a href="./destination/Mars.js">Mars</a></li>
                    <li><a href="destination-europa.html">Europa</a></li>
                    <li><a href="destination-titan.html">Titan</a></li>

                </ul> */}
                <ul>
                    <CustomLink to="europe" >Europe</CustomLink>
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
    )
};