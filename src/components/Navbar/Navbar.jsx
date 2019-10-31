import React from 'react';
import '../../styles/Navbar.css'
import {Link} from "react-scroll";

const Navbar = () => {

    return(
        <nav className="navBar">
            <div className="navItems">
                <Link
                    className="navItem"
                    activeClass="active"
                    to="title"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Welcome
                </Link>
                <Link
                className="navItem"
                activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    About
                </Link>
                <Link
                    className="navItem"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Resume
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;