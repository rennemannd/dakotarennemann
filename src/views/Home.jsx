import React from 'react';
import '../assets/styles/Home.css';
import Header from '../components/Header/Header';
import NavBar from '../components/Navbar/Navbar';
import About from '../components/About/About';

// This is the main home view for the website
const Home = () => {
  return (
    <div className="Home">
        <NavBar />
        <div className="Home-header" id="title">
            <Header id = "about" />
        </div>
      <div className="Home-body" id="about">
          <About/>
      </div>
    </div>
  );
}

export default Home;
