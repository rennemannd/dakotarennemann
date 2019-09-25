import React from 'react'
import Typist from 'react-typist';
import logo from "../maintenance.png";
import "../styles/Header.css"

const Header = () => {
    return(
        <div className="Header">
            <h2>
                My name is <em className="Header-name">Dakota Rennemann</em>
            </h2>
            <h2>
                <Typist className ="MyTypist">
                    <em>I like to </em>
                    <em>design solutions</em>
                    <Typist.Backspace count={16} delay={800} />
                    <em>solve problems</em>
                    <Typist.Backspace count={14} delay={900} />
                    <em>innovate</em>
                </Typist>
            </h2>
        </div>
    )
}

export default Header;