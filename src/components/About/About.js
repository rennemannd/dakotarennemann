import React from 'react';
import "../../styles/content.css";
import headshot from '../../docs/Headshot.jpg';
import Git from '../../docs/Git.svg';
import Gmail from '../../docs/Gmail.png';
import Linkedin from '../../docs/Linkedin.svg';


const About = () => {
    return(
        <div>
            <h2 className="page-header">
                About
            </h2>
            <div className="page-content">
                <img src={headshot} className="page-headshot"/>
                <p className="page-element">
                    My name is Dakota Rennemann and I am currently a student at the University of Florida studying Computer Science.
                    I am very passionate about writing software of all kinds. I especially enjoy working with frameworks such as React and languages such as Python, and C#.
                </p>
                <div className="page-links">
                    <a href="https://github.com/rennemannd" target="_blank"><img src={Git}/></a>
                    <a href="mailto: rennemannd@gmail.com" target="_blank"><img src={Gmail}/></a>
                    <a href="https://www.linkedin.com/in/rennemannd/" target="_blank"><img src={Linkedin}/></a>
                </div>
            </div>

        </div>
    )
}

export default About;