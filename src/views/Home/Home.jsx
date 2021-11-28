import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import TopNavBar from '../../components/Navbar/TopNavbar';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import ProjectList from '../../components/ProjectList/ProjectList';

const Home = () => {
  return (
    <div className="Home">
      <TopNavBar />
      <div className="Home-header" id="title">
        <Header />
      </div>
      <div className="Home-body" id="projects">
        <ProjectList />
      </div>
      <div className="Home-body" id="about">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
