// import Navigation from  "./Navigation";
import logo from "./logo.svg"

function App() {
  return (
    <main className="container_home">
    <div className="nav">
      <div className="nav_logo">
        <img src={logo} alt=""/>
        <span></span>
      </div>
      <nav className="nav_menu">
        <ul>
          <li><a href="/" className="active"><strong>00</strong> HOME</a></li>
          <li><a href="/destinations/destination-moon.html"><strong>01</strong> DESTINATION</a></li>
          <li><a href="/crew/crew-commander.html"><strong>02</strong> CREW</a></li>
          <li><a href="/technology/technology-vehicle.html"><strong>03</strong> TECHNOLOGY</a></li>
        </ul>
      </nav>
    </div>
    {/* <Navigation /> */}
    <article className="home">
      <section className="home_text">
        <p className="home_want">SO, YOU WANT TO TRAVEL TO</p>
        <p className="home_space">SPACE</p>
        <p className="home_content">Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
      </section>
      <button className="home_btn"><span>Explore</span></button>
    </article>
  </main>
  );
}

export default App;
