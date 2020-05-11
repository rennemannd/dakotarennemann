import React, {useEffect} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import ProjectList from '../../components/ProjectList/ProjectList';

// This is the main home view for the website
const Home = () => {
    useEffect(() => {
        alert("This site is currently undergoing temporary maintenance and missing certain features, the full site will be live 05/11 at 10 PM EST")
    })

    return (
        <div className="Home">
            <NavBar/>
            <div className="Home-header" id="title">
                <Header />
            </div>
            <div className="Home-body" id="projects">
                <ProjectList />
            </div>
            <div className="Home-body" id="about">
                <About/>
            </div>
        </div>
    );
}

export default Home;
