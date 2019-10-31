import React from 'react';
import "../../assets/styles/content.css";
import headshot from '../../assets/images/Headshot.jpg';
import Git from '../../assets/images/Git.svg';
import Gmail from '../../assets/images/Gmail.png';
import Linkedin from '../../assets/images/Linkedin.svg';


const About = () => {
    return(
        <div>
            <h2 className="page-header">
                About
            </h2>
            <div className="page-content">
                <img src={headshot} className="page-headshot" alt="Profile Picture"/>
                <p className="page-element">
                    My name is Dakota Rennemann and I am currently a student at the University of Florida studying Computer Science.
                    I am very passionate about writing software of all kinds. I especially enjoy working with frameworks such as React and Node as well as languages like Python, C++, and C#.
                </p>
                <div className="page-links">
                    <a href="https://github.com/rennemannd" target="_blank" rel="noopener noreferrer"><img src={Git} id="content-link" alt="Github link" /></a>
                    <a href="mailto: rennemannd@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Gmail} id="content-link" alt="Email Link"/></a>
                    <a href="https://www.linkedin.com/in/rennemannd/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} id="content-link" alt="LinkedIn Link"/></a>
                </div>
            </div>

        </div>
    )
}

export default About;