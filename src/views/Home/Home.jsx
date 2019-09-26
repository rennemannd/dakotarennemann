import React from 'react';
import '../../styles/Home.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar'


// This is the main home view for the website
const Home = () => {
  return (
    <div className="Home" id="title">
        <NavBar />
        <div className="Home-header">
            <Header id = "about" />
        </div>
      <div className="Home-body" id="about">
          This should be the about section
      </div>
        <div className="Home-body" id="resume">
            This should be the resume section
        </div>
    </div>
  );
}

export default Home;
