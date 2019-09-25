import React from 'react';
import '../styles/Header.css'
import HeaderText from "./HeaderText";
import Particles from 'react-particles-js';


const Header = () => {
    return (
        <div>
            <div className="Header-particles">
                <Particles/>
            </div>
            <HeaderText/>
        </div>
    )
}

export default Header;