import React, { Component } from 'react';
import './Article.css';


class Article extends Component {
    render() {
        return (
            <article className="home">
                <HomeTextSection />
                <Button />
            </article>
        )
    }
}

export default Article

class HomeTextSection extends Component {
    render() {
        return (
            <section className="home_text">
                <p className="home_want">SO, YOU WANT TO TRAVEL TO</p>
                <p className="home_space">SPACE</p>
                <p className="home_content">Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
            </section>
        )
    }
}

class Button extends Component {
    render() {
        return (
            <button class="home_btn"><span>Explore</span></button>
        )
    }
}
