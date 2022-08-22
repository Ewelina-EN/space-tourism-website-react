import React from 'react';
import Button from "./Button/Button";
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <main className="container_home">
      <Navbar />
      <article className="home">
        <section className="home_text">
          <p className="home_want">SO, YOU WANT TO TRAVEL TO</p>
          <p className="home_space">SPACE</p>
          <p className="home_content">Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
        </section>
        <Button />
      </article>
    </main>
  );
}

export default App;
