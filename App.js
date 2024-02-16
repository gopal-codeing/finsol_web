import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection from './HomeSection';
import hanuman from './hanuman.jpg';
import Blogmedia from './Blogmedia';
import Centerheading1 from './Centerheading1';
import Logo from './Logo';
import End from './End';
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
        <img src={hanuman} width="50" height="50" /> Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <HomeSection></HomeSection>
    <Centerheading1 />
      <Logo />
      <Blogmedia></Blogmedia>
      <End></End>
    </>
  );
}

export default App;
