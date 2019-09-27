import React from 'react';
import '../../styles/Header.css'
import HeaderText from "./HeaderText";
import Particles from 'react-particles-js';
import ParticleParams from '../../docs/particles';


const Header = () => {
    return (
        <div className="Header">
            <div className="Header-particles noselect">
                <Particles params={ParticleParams}/>
            </div>
            <HeaderText/>
        </div>
    )
}

export default Header;