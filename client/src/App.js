import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    
        <div className="wrapper">
          <header id="masthead">
            <div className="container">
              <a href="index.html" id="logo">Tom LaChance</a>
              <nav>
                <ul>
                  <li>
                    <a href="index.html" target="_blank">About</a>
                  </li>
                  <li>
                    <a href="portfolio.html" target="_blank">Portfolio</a>
                  </li>
                  <li>
                    <a href="contact.html" target="_blank">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          
          <main className="container">
            <section className="main-section">
              <h1>About Me</h1>
              <img src="assets/images/IMG_NW_Bio.png" className="auth-image" alt="profile picture" />
              <p>I play and teach the guitar. I also like to create. </p>
              <p>You can find my
                <a href="https://guitarlanguage.github.io/" target="_blank">Guitar Language Series</a> on youtube. Also, I enjoy playing hockey and hanging out with friends.</p>
              <p>
                <a href="https://cdn.patch.com/users/204114/2011/02/353fb0462ceba1727633ca360ca475b5.mp4" target="_blank">Back in 2010, I was the Illinois Barrel Jumping Champion.</a> In 2004, I played one season of junior hockey for the
                Columbus Stars. Originally drafted by Peoria, I was traded for a puck bag and a box of nabisco crackers.</p>
              <p> Alot of my physical endeavors have been on a six month hiatus due to injury. (I fell off my bicycle and fractured my
                elbow in June of 2017) I look forward to the challenge ahead with Northwestern's software development camp.</p>
            </section>
            <section className="sidebar">
              <div id="connect">
                <h2>Connect With Me</h2>
                <ul>
                  <li>
                    <a href="https://github.com/guitarlanguage" target="_blank">
                      <img src="assets/images/64x64/if_github_square_black_107109.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/thomas-lachance-2287a917/" target="_blank">
                      <img src="assets/images/64x64/if_linkedin_square_color_107091.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://stackoverflow.com/users/7602151/tom-lachance" target="_blank">
                      <img src="assets/images/64x64/if_overflow_334695.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </main>
          <div className="push" />
        </div>
        <footer>
          <div className="container">
            © Copyright 2017 Tom LaChance
          </div>
        </footer>
    </div>
    );
  }
}

export default App;
