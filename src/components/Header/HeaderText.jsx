import React from 'react'
import Typist from 'react-typist';
import logo from "../../maintenance.png";
import "../../styles/Header.css"

const HeaderText = () => {
    return(
        <div className="Header">
            <h2>
                My Name is <em className="Header-name">Dakota Rennemann</em>
            </h2>
            <h2 className="Header-typist">
                <span>I Strive to</span>
                &nbsp;
                <Typist className ="MyTypist" avgTypingDelay={100}>
                    <Typist.Delay ms={2500} />
                    <em>Design Solutions</em>
                    <Typist.Backspace count={16} delay={3000} />
                    <em>Solve Problems</em>
                    <Typist.Backspace count={14} delay={3000} />
                    <em>Innovate</em>
                </Typist>
            </h2>
        </div>
    )
}

export default HeaderText;